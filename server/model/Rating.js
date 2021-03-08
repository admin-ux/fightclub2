const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema
const RatingSchema = new Schema({
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    //Always Equals the initial post it is associated with,
    // this is NOT unique among ratings, and all ratings associated
    // with the initial post in question share this value
    IPid:{
        type: String,
        required: true
    }
});

module.exports = Rating = mongoose.model('rating', RatingSchema);