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
const jwtDecode = require("jwt-decode");
const { request } = require('express');
// const validatePredictionCreation = require('../../validation/Predictions/validatePredictionCreation');

// ! Need to figure out security and stradegy around retrieving/ querring predicitons of users


// Get a specific fight prediction of the current user or all predictions of the current user
router.get('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    // ! Need to know if params is empty - no fightID

    // One specific fight prediction from a user for a user
    if (req.query.fightID && req.query.userID){
        Predictions.findOne({
            // Query
            userID: req.query.userID,
            fightID: req.query.fightID
        }).then(prediction =>{
            if (!prediction){
                return res.status(404).json({
                    msg: "Users specific fight prediction could not be found",
                    success: false
                });
            }
            else {
                return res.status(200).json(prediction);
            }
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }
    // All fight for a user
    else if  (req.query.userID){
        Predictions.find({
            // Query
            userID: req.query.userID,
        }).then(prediction =>{
            if (!prediction){
                return res.status(404).json({
                    msg: "Any fight prediction for this user could not be found",
                    success: false
                });
            }
            else {
                return res.status(200).json({success:true, predictions:prediction});
            }
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }
    // All predictions for one fightID
    else{
        Predictions.find({
            // Query
            fightID: req.query.fightID

        }).then(prediction =>{
            if (!prediction){
                return res.status(404).json({
                    msg: "Fight Prediction could not be found",
                    success: false
                });
            }
            else {
                return res.status(200).json(prediction);
            }
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for user"});
        })
    }

  
    
});
// First FightID: Get a specific fight prediciton of a specified 
// // TODO Secondary userID : **?*** all predictions ****?****, Needs to be further discussed and developed
// router.get('/:userID/:fightID', passport.authenticate('jwt', {
//     session: false
//     }), (req, res) => {

    
//     // All fight for a user
//     if (!req){
//         Predictions.find({
//             // Query
//             // Not sue where data is accessed from for user
//             userID: req.user.userID,
//             // fightID: req.params.fightID
            

//         }).then(prediction =>{
//             if (!prediction){
//                 return res.status(404).json({
//                     msg: "Username is not found.",
//                     success: false
//                 });
//             }
//         }).catch(()=>{
//             return res.status(400).json({error:"Error in finding predictions for user"});
//         })
//     }
//     // Specific fight for user
//     else{
//         Predictions.findOne({
//             // Query
//             userID: req.user.userID,
//             fightID: req.params.fightID

//         }).then(prediction =>{
//             if (!prediction){
//                 return res.status(404).json({
//                     msg: "Username is not found.",
//                     success: false
//                 });
//             }
//         }).catch(()=>{
//             return res.status(400).json({error:"Error in finding predictions for user"});
//         })
//     }

    
      
    
// });
// Create a prediction for the current user for a fight specified in body
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    //const { errors, isValid } = validatePredictionCreation(req.body);
    console.log("newPredictionID " + req.body.predictionID);
    console.log("fightID " + req.body.fightID);
    console.log("userID " + req.body.userID);
    console.log("winner " + req.body.winner);
    console.log("winMethod " + req.body.winMethod);
    console.log("details " + req.body.details);

    let newPrediction = new Predictions({
        predictionID: req.body.predictionID,
        fightID: req.body.fightID,
        userID: req.body.userID,
        winner: req.body.winner,
        winMethod: req.body.winMethod,
        details:req.body.details
    });

    console.log("New prediction " + JSON.stringify(newPrediction));

    newPrediction.save()
    .then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error creating a new prediction"});
    })
 
    
});
// Delete a specific prediction
router.delete('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    Predictions.deleteOne({

        predictionID: req.body.predictionID

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error deleting a new prediction"});
    })
});

// Edit a specific predictionID
router.put('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
        console.log("This should be winmethod " + req.body.winMethod)
    // ! You must give all parameters or they will be set to null
    Predictions.updateOne(
        {"predictionID" : req.body.predictionID},
        {$set: {
            predictionID: req.body.predictionID,
            fightID: req.body.fightID,
            userID: req.body.userID,
            winner: req.body.winner,
            winMethod: req.body.winMethod,
            details:req.body.details
            
    }
    
    }).then(()=>{
        return res.status(200).json({
            status: "ok",
            success: true
        })
    }).catch(()=>{
        return res.status(400).json({error:"Error editing a prediction"});
    });
    
 
});

module.exports = router;