const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the GLOBAL Leaderboard Schema
const CreatedLeaderboardSchema = new Schema({
    // Unique Set by the user
    leaderboardID: {
        type: String,
        required: true
    },
    userIDList: {
        type: [String],
        required: true
    },
    totalUsers: {
        type: Number,
        required: true
    },
});

module.exports = CreatedLeaderboard = mongoose.model('createdleaderboard', CreatedLeaderboardSchema);