const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { Quote } = require('../models');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    // SMTP configuration for your email provider
    // For example, for Gmail:
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD // Your email password
    }
});


// POST route for submitting a quote
router.post('/submit-quote', async (req, res) => {
    try {
        // Extract quote data from request body
        const { name, email, phone, projectDetails } = req.body;

        // Save quote to database
        await Quote.create({ name, email, phone, projectDetails });

        const mailOptions = {
            from: process.env.EMAIL_FROM, // Your email address
            to: process.env.EMAIL_FROM, // Recipient's email address
            subject: 'New Quote Submission',
            html: `
                <h1>New Quote Submission</h1>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Project Details: ${projectDetails}</p>
                  `
        };

        // Send email with quote data
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email: ", error);
            } else {
                console.log("Email sent: ", info.response);
            }
        });

        // Redirect to home page with success message
        res.redirect('/thank-you');
    } catch (err) {
        // Handle errors
        console.error('Error submitting quote:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/', (req, res) => {
    res.render('getQuote');
});




module.exports = router;
