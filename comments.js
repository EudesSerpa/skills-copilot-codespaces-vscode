// Create web server

// Install Express
const express = require('express');

// Create a new Express app
const app = express();

// Set the port number
const port = 3000;

// Create a route handler for the index page
app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});