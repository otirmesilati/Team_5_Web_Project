const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/',(req,res) => {
    res.send("<h1>server main page response</h1>");
});

app.listen(port, () => {
    console.log("up goes the server");
});