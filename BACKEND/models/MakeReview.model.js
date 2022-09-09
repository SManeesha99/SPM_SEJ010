const mongoose = require('mongoose');

const makeReviewSchema = new mongoose.Schema({

    Review:{type: String, required: true},
    Date:{type: Date, required: true}

});

const makeReview = mongoose.model("makeReview",makeReviewSchema);
module.exports = makeReview;
