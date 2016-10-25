/**
 * Created by Semen on 24.10.2016.
 */
var path = require('path');
var util = require('util');
var http = require('http');

function HttpError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = message || http.STATUS_CODES[status] || "errort";
}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';
exports.HttpError = HttpError;