var User = require('./models/user').User;

var user = new User({
    username: "Tester2",
    password: "secret"
});

user.save(function (err, user, affected) {
    User.findOne({username:"Tester3"}, function (err, tester) {
        console.log(tester);
    })
});