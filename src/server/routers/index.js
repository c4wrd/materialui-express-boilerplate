var express = require("express");
var apis = require('./api');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;