let mongoose = require('mongoose');

let Test = mongoose.model('Test', {
    string_to_cut: {
        type: String
    },
    return_string: {
        type: String
    }
    // submittedAt: {
    //     type: Number,
    //     default: null
    // }
});

module.exports = {Test}