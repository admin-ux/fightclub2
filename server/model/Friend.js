const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Friend Schema
const Friendchema = new Schema({
    fightlistID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    fightlistID: {
        type: String,
        required: true
    },
});

module.exports = Friend = mongoose.model('friend', FriendSchema);