var express = require('express');
var router = express.Router();
var apiUserRouter = require('./users');

router.use('/users', apiUserRouter);


module.exports = router;