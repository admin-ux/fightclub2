const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Friend Schema
const FightSchema = new Schema({
    fightID: {
        type: String,
        required: true
    },
    fighter1: {
        type: String,
        required: true
    },
    fighter2: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

module.exports = Fight = mongoose.model('fight', FightSchema);