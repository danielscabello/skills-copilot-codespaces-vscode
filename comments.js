// Create web server application
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var port = 3000;

// Set static file path
app.use(express.static(__dirname + '/public'));

// Set views path
app.set('views', './views');

// Set view engine
app.set('view engine', 'ejs');

// Use body-parser
app.use(bodyParser.urlencoded({extended: false}));

// Use body-parser JSON
app.use(bodyParser.json());

// Use router
var router = require('./router/main')(app, fs);

// Create server
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});