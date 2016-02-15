var express = require("express");
var io = require("socket.io");
var hbs = require('hbs');

var app = express();
app.use(express.static('build'));

app.use(require('./src/server/routers/index'));
app.use(require('./src/server/routers/api'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.listen(3000);