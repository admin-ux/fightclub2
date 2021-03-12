const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const Predictions = require('../../model/Predicitions');
const Friend = require('../../model/Friend');
const Friendlist = require('../../model/Friendlist');
const jwtDecode = require("jwt-decode");


// ! Need to figure out security and stradegy around retrieving/ querring predicitons of users


// Get a specific fight prediciton of the current user or all predictions of the current user
router.get('/:fightID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    // ! Need to know if params is empty - no fightID
    if (!req){
        Predictions.find({
            // Query
            // Not sue where data is accessed from for user
            userID: req.user.userID,
            // fightID: req.params.fightID
            

        }).then(prediction =>{
            if (!prediction){
                return res.status(404).json({
                    msg: "Username is not found.",
                    success: false
                });
            }
        })
    }

    else{
        Predictions.findOne({
            // Query
            userID: req.user.userID,
            fightID: req.params.fightID

        }).then(prediction =>{
            if (!prediction){
                return res.status(404).json({
                    msg: "Username is not found.",
                    success: false
                });
            }
        })
    }
  
    
});
// Get a specific fight prediciton of a specified user or **?*** all predictions ****?****
router.get('/:userID/:fightID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
      
    
});
// Create a prediction for the current user for a fight specified in body
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
    
});
// Delete a specific predicition
router.delete('/:predictionID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
  
});
// Edit a specific predictionID
router.put('/:predictionID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
 
});

module.exports = router;