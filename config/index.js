/**
 * Created by Semen on 20.10.2016.
 */
var nconf = require('nconf');
var path = require('path');

nconf
    .argv()
    .env()
    .file({ file: path.join(__dirname,'config.json')});

module.exports = nconf;