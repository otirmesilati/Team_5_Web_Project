const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to team 8s web page!</h1>');
});

app.listen(port, () => {
  console.log('up goes the server');
});
