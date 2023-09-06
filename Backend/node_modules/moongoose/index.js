var Promise = require('bluebird'),
    streamz = require('streamz'),
    keys = require('./keys.json'),
    cursor_keys = require('./cursor_keys.json');

// Creates a lazy cursor that executes methods when connected
// returning promises for everything except `.stream()` and `.pipe`
function cursor(action,__populate) {
  function next(key) {
    return function() {
      return action.then(cur => cur[key].apply(cur,arguments));
    };
  }

  var obj = cursor_keys.reduce( (p,key) => {
    p[key] = next(key);
    return p;
  },{});

  obj.stream = function() {
    var s = streamz(populate(__populate),{concurrency: 10});
    action.then(cur => cur.pipe(s));
    return s;
  };

  obj.pipe = d => obj.stream().pipe(d) && d;

  obj.toArray = function() {
    return new Promise(function(resolve,reject) {
      var data = [];
      obj.stream()
        .on('error',reject)
        .pipe(streamz(d => data.push(d)))
        .on('error',reject)
        .on('finish', () => resolve(data));
    });
  };

  return obj;
}

// Populates incoming data based on __populate definitions
function populate(defs) {
  return function(d) {
    if (!d || !defs || !defs.length) return d;
    defs.forEach(p => {
      d[p.field] = p.collection.findOne({_id:d[p.field]},p.select);
    });
    return Promise.props(d);
  };
}

// Creates a lazy collection that executes methods when connected
function collection(col,options) {
  options = options || {};
  var c = this.__connected.promise.then(db => db.collection(col)),
      self = this,
      validate;

  if (options.schema) {
    var ajv = require('ajv')(options.ajv_options || {removeAdditional:true});
    validate = function(doc) {
      if (!ajv.validate(options.schema,doc))
        return Promise.reject(ajv.errors);
      return doc;
    };
  }

  function then(key) {
    return function() {
      var action = c.then(c => c[key].apply(c,arguments)),
          __populate = [];

      if (key === 'find')
        action = cursor(action,__populate);
      else if (key === 'findOne')
        action = action.then(populate(__populate));

      action.populate = function(field,collection,project) {
        __populate.push({field: field, collection: self.collection(collection), project: project});
        return action;
      };

      return action;
    };
  }

  var obj = keys.reduce(function(p,key) {
    p[key] = then(key);
    return p;
  },{});


  // Modify save and insert to perform validation before executing
  ['save','insert'].forEach(key => {
    var fn = obj[key];
    obj[key] = function(doc,o) {
      var _id = doc._id;  // Keep the id (if exists) in case it gets stripped out in validation
      return Promise.resolve(validate && validate(doc))
        // optional extra validation
        .then(typeof options.validate === 'function' && options.validate)
        // and finally upsert
        .then( () => {
          doc._id = _id;
          return fn.call(obj,doc,o);
        });
    };
  });

  return obj;
}

function moongoose(mongodb) {
  mongodb = mongodb || require('mongodb');
  
  return  Object.create({
    collection : function(col,options) {
      if (this.__collections[col]) {
        if (options)
          throw new Error('Options already set');
        return this.__collections[col];
      }
      var obj = collection.call(this,col,options);
      if (options) this.__collections[col] = obj;
      return obj;
    },
    connect : function() {
      return mongodb.connect.apply(mongodb,arguments)
        .then(db => {
          this.__connected.resolve(db);
          return this.__connected.promise;
        });
    },
    clone : moongoose
  },{
    __connected : { value : Promise.defer() },
    __collections: { value: {}}
  });
}

module.exports = moongoose();
