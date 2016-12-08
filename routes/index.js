var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
/* GET users listing. */
router.get('/', function(req, res, next) {
/*  var user = new User({login: "root", password:"root", username:"Pajama Sam"});
  user.save(function (err) {
      if(err)return next(err);
      res.render('index',{});
  });*/
  res.render('index',{});
});

module.exports = router;
