const mongoose = require('mongoose');
const {Schema} = mongoose

const CitySchema = new mongoose.Schema({    
    image: {
        data: Buffer,         // Image binary data
        contentType: String,  // MIME type
        filename: String,     // Filename
      },

    cityname:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    },


});
module.exports = mongoose.model('city', CitySchema);   

