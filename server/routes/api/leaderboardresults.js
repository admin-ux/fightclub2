const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const Predictions = require('../../model/Predictions');
const Friend = require('../../model/Friend');
const Friendlist = require('../../model/Friendlist');
const Friendlist = require('../../validation/Predictions/validatePredictionCreation');
const jwtDecode = require("jwt-decode");



// TODO Might switch the name of the file to leaderboard and make the rest of the routes leaderboardresults

// Get 
// 1) a specific leaderboard result / user
// 2) specific number of results 
// 3) Get all leaderboard results
router.get('/leaderboard/:fightID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
   
    
});

// Accept one result for a fight and 
// 1) Algorithm evaluates result
// 2) Query Predictions of Fight result for all predictions and use algorithm to get points for each user
// 3) Insert to each user leaderboard spot and {user account} ????????????????????? 
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
});
// Delete a specific result and their respective scores
// ! This must be cascading to users and leaderboards
router.delete('/:fightresultID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

});

// Edit a specific result
// ! This must be cascading to users and leaderboards
router.put('/:predictionID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

 
});

module.exports = router;