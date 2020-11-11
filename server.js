// ExpressJS Setup
const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// Hyperledger Bridge

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// use static file
app.use(express.static(path.join(__dirname, 'views')));

// configure app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// main page routing
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/viewpage/index.html');
})

// server start
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);