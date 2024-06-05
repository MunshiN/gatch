const express = require('express');
const app = express();

// Regular expressions for device detection
const androidRegex = /android/i;
const appleDeviceRegex = /iphone|ipad|ipod/i;

app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

app.get('/redirect', (req, res) => {
  try {
    const userAgent = req.headers['user-agent']; // Extract user-agent from request headers

    // Redirect based on user-agent
    if (androidRegex.test(userAgent)) {
      res.redirect('https://play.google.com/store/apps/details?id=com.example.app');
    } else if (appleDeviceRegex.test(userAgent)) {
      res.redirect('https://apps.apple.com/us/app/example-app/id1234567890');
    } else {
      res.redirect('https://google.com'); // Fallback URL
    }
  } catch (error) {
    console.error('Error during redirection:', error);
    res.status(500).send('An error occurred');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
