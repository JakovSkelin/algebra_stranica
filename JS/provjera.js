const express = require('express');
const session = require('express-session');
const app = express();

// Simulated authentication status
const isLoggedIn = true; // Replace with actual authentication check

// Set up session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  if (!isLoggedIn) {
    // User is not logged in, serve pages o_nama.html, kontak.html, novosti.html
    res.sendFile(__dirname + '/o_nama.html');
    // You can repeat this for other pages
  } else {
    // User is logged in, serve nastavni_plan.html
    res.sendFile(__dirname + '/nastavni_plan.html');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});