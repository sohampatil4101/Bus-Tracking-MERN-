const express = require('express')
const contactModel = require('../models/contact.js');

const contactRoutes = new express.Router();

contactRoutes.post("/", async (req, res) => {
    const contact = new contactModel(req.body);
    console.log(contact);

    try {
        const result = await contact.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = { contactRoutes };