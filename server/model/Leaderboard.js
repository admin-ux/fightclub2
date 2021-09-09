const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the GLOBAL Leaderboard Schema
const LeaderboardSchema = new Schema({
    // Might not need this anymore
    // leaderboardID: {
    //     type: String,
    //     required: true
    // },
    userID: {
        type: String,
        required: true
    },
    totalPredictions: {
        type: Number,
        required: true
    },
    totalWins: {
        type: Number,
        required: true
    },
    averagePointsPerWin: {
        type: Number,
        required: true
    },
    winPercentage: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

module.exports = Leaderboard = mongoose.model('leaderboard', LeaderboardSchema);