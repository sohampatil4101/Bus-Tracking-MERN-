![moongoose](https://i.kinja-img.com/gawker-media/image/upload/s--wbCHfA3R--/c_fit,fl_progressive,q_80,w_636/17hnwnvcypnk6jpg.jpg)

Q: Why do people use mongoose?

Here are some of the benefits:
* You can execute commands right away without having to wait for `mongo.connect()`
* You get schema validation
* You can create synthetic joins via populate

However, there are some potential downsides:
* Mongoose is global object - causing potential conflicts
* Mongoose can be very slow with all the getters, setters and whatnot
* the `lean()` options ends up being slower than native
* It can be difficult to understand what is going on behind the scenes
* The schema is non-standard

Moongoose to the rescue

* Just over 100 LOC - simple wrapper around native
* No need to wait for connection before executing commands
* Efficient `populate` for streaming and findOnes
* Validation with JSON schema
* Acts global but can be cloned for ringfencing different instances

### Examples

#### Example: fetching data

```js
var moongoose = require('moongoose');

moongoose.connect('mongodb://localhost:27017/test');

// Find one record and populate
moongoose.collection('test')
  .findOne({})
  .populate('org_id','orgs')
  .then(console.log);

// Find all record, populate and stream
moongoose.collection('test')
  .find()
  .populate('org_id','orgs')
  .stream()
  .pipe(...);

// Find all records, poopulate and capture into array
moongoose.collection('test')
  .find()
  .populate('org_id','orgs')
  .toArray()
  .then(console.log)
```

#### Example: save a record with validation

```js
var test = moongoose.collection('test',{
  schema: {
    additionalProperties: false,
    properties: {
      answer: {type:'boolean'},
      fail: {type:'boolean'}
    }
  },
  validate : function(data) {
    if (data.fail)
      throw 'Failed custom validation';
  }
});

// This successfully save the record - junk is removed in validation
test.save({
  answer: true,
  junk: 'this gets removed'
})
.then(d => console.log(d.ops[0]),console.log);

// This fails validation and is not saved
test.save({
  answer: 'not a boolean'
})
.then(d => console.log(d.ops[0]),console.log);

// This passes json-schema validation but fails custom validation
test.save({
  answer: true,
  fail: true
})
.then(d => console.log(d.ops[0]),console.log);
```