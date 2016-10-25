var mongoose = require('./libs/mongoose');
var async = require('async');
var User = require('./models/user').User;

async.series([
    open,dropDatabase,createUsers,close
],function (err, result) {
    console.log(arguments);
});

function open(callback) {
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function createUsers(callback) {
    async.parallel([
        function (callback) {
            var vas = new User({username: "vas", password: "qwe"});
            vas.save(function (err) {
                callback(err, vas);
            })
        },
        function (callback) {
            var pet = new User({username: "pet", password: "321"});
            pet.save(function (err) {
                callback(err, pet);
            })
        },
        function (callback) {
            var ser = new User({username: "ser", password: "123"});
            ser.save(function (err) {
                callback(err, ser);
            })
        }
    ],callback);
}

function close(callback) {
    mongoose.disconnect(callback);
}
