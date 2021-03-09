const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Predictions Schema
const PredictionsSchema = new Schema({
    predicitionID: {
        type: String,
        required: true
    },
    fightID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    avg: {
        type: Number,
        required: true
    }
});

module.exports = Predictions = mongoose.model('predictions', PredictionsSchema);