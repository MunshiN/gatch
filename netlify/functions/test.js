// Using the Netlify Functions runtime
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
    if (/android/i.test(userAgent)) {
        res.redirect('https://play.google.com/store/apps/details?id=com.lutsgames.IdleSuperpowers&pcampaignid');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        res.redirect('https://apps.apple.com/us/app/keynote/id361285480');
    } else {
        res.redirect('https://play.google.com/store/apps/details?id=com.lutsgames.IdleSuperpowers&pcampaig[…]published_cluster_promotion_battlestar_browse_all_games&hl=en'); // Fallback URL
    }
});



module.exports.handler = serverless(app);
