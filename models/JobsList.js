const mongoose = require('mongoose');

const JobsListShema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    jobTitle: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true,
    },
    city: {
        type: String,
    },
    status: {
        type: String,
        default: 'applied'
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('jobsList', JobsListShema)