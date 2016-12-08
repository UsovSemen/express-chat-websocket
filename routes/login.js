var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */

router.post('/',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: false })
);

router.get('/', function (req, res, next) {
    res.render('login');
});


module.exports = router;
