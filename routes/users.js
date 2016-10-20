var express = require('express');
var router = express.Router();

/* GET usersPage listing. */
router.get('/', function(req, res, next) {
  res.render('usersPage/users', {title : "mainUser"})
});

router.get('/list', function (req, res, next) {
  res.render('usersPage/users', {title : "userList"})
});

module.exports = router;
