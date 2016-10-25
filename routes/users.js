var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
var HttpError = require("../error/index").HttpError;
/* GET usersPage listing. */
router.get('/', function(req, res, next) {
  res.render('usersPage/users', {title : "mainUser"})
});

router.get('/list', function (req, res, next) {
  res.render('usersPage/users', {title : "userList"})
});

router.get('/ex', function (req, res, next) {
  User.find({},function (err, users) {
    if(err) return next(err);
    res.json(users);
  })
});

router.get('/ex/:id', function (req, res, next) {
  User.findById(req.params.id,function (err, user) {
    if(err) return next(err);
    if(!user){
      next(new HttpError(404, "User not found"));
    }
    res.json(user);
  })
});

module.exports = router;
