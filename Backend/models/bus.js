const mongoose = require('mongoose');
const {Schema} = mongoose

const BusSchema = new mongoose.Schema({
    city:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city',
    },

    busnumber:{
        type: String,
        required: true
    },
    
    
    date:{
        type: Date,
        default: Date.now
    },


});
module.exports = mongoose.model('bus', BusSchema);   

