const express = require('express');
const router = express.Router();
const { Quote } = require('../models');

router.get('/', (req, res) => {
    res.render('getQuote');
});



// POST route for submitting a quote
router.post('/submit-quote', async (req, res) => {
    try {
        // Extract quote data from request body
        const { name, email, phone, projectDetails } = req.body;

        // Save quote to database
        await Quote.create({ name, email, phone, projectDetails });

        // Respond with success message
        res.status(200).json({ message: 'Quote submitted successfully' });
    } catch (err) {
        // Handle errors
        console.error('Error submitting quote:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
