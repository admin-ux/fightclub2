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


// ! Need to figure out security and stradegy around retrieving/ querring predicitons of users


// Get a specific fight prediction of the current user or all predictions of the current user
router.get('/:fightID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    // ! Need to know if params is empty - no fightID

    // All fight for a user
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
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }
    // Specific fight for user
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
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }
  
    
});
// First FightID: Get a specific fight prediciton of a specified 
// TODO Secondary userID : **?*** all predictions ****?****, Needs to be further discussed and developed
router.get('/:userID/:fightID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

    
    // All fight for a user
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
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }
    // Specific fight for user
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
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }

    
      
    
});
// Create a prediction for the current user for a fight specified in body
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    const { errors, isValid } = validatePredictionCreation(req.body);
    let newPrediction = new Predictions({
        predictionID: req.body.predictionID,
        fightID: req.body.fightID,
        userID: req.body.userID,
        winner: req.body.winner,
        winMethod: req.body.winMethod,
        details:req.body.details
    });

    newPrediction.save()
    .then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error creating a new prediction"});
    })
 
    
});
// Delete a specific prediction
router.delete('/:predictionID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    Predictions.deleteOne({

        predictionID: req.params.predictionID

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error deleting a new prediction"});
    })
});

// Edit a specific predictionID
router.put('/:predictionID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
        // TODO Check if you only edit/ change one parameter do the other parameters get changed? 
    Predictions.update(
        {"predictionID" : req.params.predictionID},
        {$set: {
            predictionID: req.body.predictionID,
            fightID: req.body.fightID,
            userID: req.body.userID,
            winner: req.body.winner,
            winMethod: req.body.winMethod,
            details:req.body.details
    }

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error editing a prediction"});
    });
    
 
});

module.exports = router;