var express = require('express');
var app = require("./app_conf.js").init(express);
var server = require('http').createServer(app).listen(5000);
var cookieParser = require('cookie-parser');

app.get('/', function (request, response) {
	console.log('Hello Travis Page!');
	response.send('Hello Travis Page!');
});

app.get('/travis', function (request, response) {
	console.log('Hello Travis!');
	response.send('Hello Travis!');
});

console.log('Complete server.js !');