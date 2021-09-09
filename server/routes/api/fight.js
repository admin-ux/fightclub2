const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;

const Fight = require('../../model/Fight');
const Leaderboard = require('../../model/Leaderboard');

const Friend = require('../../model/Friend');
const Friendlist = require('../../model/Friendlist');
const jwtDecode = require("jwt-decode");
const { request } = require('express');
// const validatePredictionCreation = require('../../validation/Predictions/validatePredictionCreation');

// ! Need to figure out security and stradegy around retrieving/ querring predicitons of users

// Get one or all fights, if fightID is provided
router.get('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

    // All fights
    if (!req.query.fightID){

    Fight.find().then(fights =>{
        if (!fights){
            return res.status(404).json({
                msg: "Fight of specied id could not be found",
                success: false
            });
        }
        else {
            return res.status(200).json(fights);
        }
    }).catch(()=>{
        return res.status(400).json({error:"Error in finding fights"});
    })

    }
    // Specific fight
    else{
        Fight.findOne({
            
            fightID: req.query.fightID,
    
        }).then(fight =>{
            if (!fight){
                return res.status(404).json({
                    msg: "Fight of specied id could not be found",
                    success: false
                });
            }
            else {
                return res.status(200).json(fight);
            }
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding specified fight"});
        })
        
    }
    
 
  
    
});
      
    
 
    
// });
// Create a prediction for the current user for a fight specified in body
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    

    let newFight = new Fight({
        fightID: req.body.fightID,
        fighter1: req.body.fighter1,
        fighter2: req.body.fighter2,
        name: req.body.name,
      
    });

    console.log("New fight " + JSON.stringify(newFight));

    newFight.save()
    .then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error creating a new fight"});
    })
 
    
});
// Delete a specific prediction
router.delete('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    Fight.deleteOne({

        fightID: req.body.fightID

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error deleting a new fight"});
    })
});

// Edit a specific predictionID for example: adding a user to the leaderboard
router.put('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
    // ! You must give all parameters or they will be set to null
    Fight.updateOne(
        {"fightID" : req.body.fightID},
        {$set: {
            fightID: req.body.fightID,
            fighter1: req.body.fighter1,
            fighter2: req.body.fighter2,
            name: req.body.name,
    }

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error editing a fight"});
    });
    
 
});

module.exports = router;