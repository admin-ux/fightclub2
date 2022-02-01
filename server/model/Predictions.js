const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Predictions Schema
const PredictionsSchema = new Schema({
  predictionID: {
    type: String,
    required: true,
  },
  fightID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  // TKO vs Decision
  winMethod: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

module.exports = Predictions = mongoose.model("predictions", PredictionsSchema);
