const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Friendlist Schema
const FriendlistSchema = new Schema({
    fightlistID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
});

module.exports = Friendlist = mongoose.model('friendlist', FriendlistSchema);