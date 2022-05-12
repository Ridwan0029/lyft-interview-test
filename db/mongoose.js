let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/lyft-interview-test');

module.exports = {mongoose}