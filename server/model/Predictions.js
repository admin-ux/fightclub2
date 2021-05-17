const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Predictions Schema
const PredictionsSchema = new Schema({
    predictionID: {
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
    // Number 1 for fighter 1 and number 2 for fighter 2
    // Note: could make this a boolean
    winner: {
        type: Number,
        required: true
    },
    // TKO vs Decision
    winMethod: {
        type: Number,
        required: true
    },
    // Will be a number value depending on method of victor
    details: {
        type: Number,
        required: true
    }
});

module.exports = Predictions = mongoose.model('predictions', PredictionsSchema);