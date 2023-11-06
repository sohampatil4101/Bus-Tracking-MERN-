const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String },
    phone: { type: Number },
    text: { type: String, required: true }
})
module.exports = mongoose.model("contacts", contactSchema);