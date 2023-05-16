const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config()

router.post('/', (req, res) => {
    const output = `
        <p>You have a new booking request</p>
        <h3>Details</h3>
        <ul>
            <li><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</li>
            <li><strong>Email:</strong> ${req.body.email}</li>
            <li><strong>Phone:</strong> ${req.body.phone}</li>
            <li><strong>City:</strong> ${req.body.city}</li>
            <li><strong>Country:</strong> ${req.body.country}</li>
            <li><strong>Province:</strong> ${req.body.province}</li>
            <li><strong>Requested Date:</strong> ${req.body.date} at ${req.body.time}</li>
            <li><strong>Description:</strong> ${req.body.description}</li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, 
            pass: process.env.GMAIL_PASS 
        }
    });

    let mailOptions = {
        from: '"HennabyTayyaba" <rustyvolts@gmail.com>',
        to: 'rustyvolts@gmail.com',
        subject: 'New Booking Request',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send('Email has been sent');
    });
});

module.exports = router;
