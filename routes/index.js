var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{});
});

module.exports = router;
