var express = require("express");

var router = express.Router();

router.post('/users', function (req, res, next) {
    // todo login logic
    res.json({id_token: '0'});
});

router.post('/sessions/create', function (req, res, next) {
    // todo signup logic
    res.json({id_token: '0'});
});

module.exports = router;