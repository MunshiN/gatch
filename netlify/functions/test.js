// Using the Netlify Functions runtime
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/redirect', (req, res) => {
    const userAgent = req.headers['user-agent'];
    if (/android/i.test(userAgent)) {
        res.redirect('https://play.google.com/store/apps/details?id=com.example.app');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        res.redirect('https://apps.apple.com/us/app/example-app/id1234567890');
    } else {
        res.redirect('https://google.com'); // Fallback URL
    }
});

app.get('/', (req, res) => {
    res.redirect('/.netlify/functions/redirect'); // Redirect to the function path
});

module.exports.handler = serverless(app);
