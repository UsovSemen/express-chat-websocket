/**
 * Created by sam on 08.12.16.
 */
var mongoose = require('../setup/mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

UserSchema.methods.validPassword = function (password) {
    return password === this.password;
};
module.exports.User = mongoose.model('user', UserSchema);
