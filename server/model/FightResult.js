const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Friend Schema
const FightResultSchema = new Schema({
    fightID: {
        type: String,
        required: true
    },
    fightresultID: {
        type: String,
        required: true
    },
    winner: {
        type: Number,
        required: true
    },
    winMethod: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

module.exports = FightResult = mongoose.model('fightresult', FightResultSchema);