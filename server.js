var express = require("express");
var io = require("socket.io");
var hbs = require('hbs');

var app = express();

app.use(express.static('build'));
app.use('/', require('./src/server/routers/index'));

app.listen(3000);