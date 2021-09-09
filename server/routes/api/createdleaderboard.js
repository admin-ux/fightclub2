const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;

const CreatedLeaderboard = require('../../model/CreatedLeaderboard');
const Leaderboard = require('../../model/Leaderboard');

const Friend = require('../../model/Friend');
const Friendlist = require('../../model/Friendlist');
const jwtDecode = require("jwt-decode");
const { request } = require('express');
// const validatePredictionCreation = require('../../validation/Predictions/validatePredictionCreation');

// ! Need to figure out security and stradegy around retrieving/ querring predicitons of users

router.get('/info', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

    // One specific fight prediction from a user for a user
    


    CreatedLeaderboard.findOne({
        // Query
        leaderboardID: req.query.leaderboardID,

    }).then(createdleaderboard =>{
        if (!createdleaderboard){
            return res.status(404).json({
                msg: "Leaderboard of specied id could not be found",
                success: false
            });
        }
        else {
            return res.status(200).json(createdleaderboard);
        }
    }).catch(()=>{
        return res.status(400).json({error:"Error in finding predictions for user"});
    })
    
 
  
    
});
      
    
router.get('/userList', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

    // One specific fight prediction from a user for a user
    
    // return res.status(200).json(createdleaderboard);

 
    CreatedLeaderboard.findOne({
        // Query
        leaderboardID: req.query.leaderboardID,

    }).then(createdleaderboard =>{
        if (!createdleaderboard){
            return res.status(404).json({
                msg: "Leaderboard of specied id could not be found",
                success: false
            });
        }
        else {
        
            
            console.log(JSON.stringify(createdleaderboard))
            for (var userID in createdleaderboard.userIDList){
                console.log("User ID: "+ createdleaderboard.userIDList[userID])
            }
            console.log("Here")
            // var obj_ids = createdleaderboard.userIDList.map(function(id) { return ObjectId(id); });
            console.log("After Here")

            // Search By a List of IDs
            Leaderboard.find({userID:{$in:createdleaderboard.userIDList}}).then(userObjs=>{
                console.log("User Objects: "+ JSON.stringify(userObjs))
                return res.status(200).json(userObjs);
                
               
            }).catch(()=>{
                return res.status(400).json({error:"Error in finding users"});
            })





        }
    }).catch(()=>{
        return res.status(400).json({error:"Error in finding Leaderboards"});
    })
    
 
  
    
});      
    
// });
// Create a prediction for the current user for a fight specified in body
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    

    let newCreatedLeaderboard = new CreatedLeaderboard({
        leaderboardID: req.body.leaderboardID,
        userIDList: req.body.userIDList,
        totalUsers: req.body.totalUsers,
      
    });

    console.log("New prediction " + JSON.stringify(newCreatedLeaderboard));

    newCreatedLeaderboard.save()
    .then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error creating a new leaderboard"});
    })
 
    
});
// Delete a specific prediction
router.delete('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    CreatedLeaderboard.deleteOne({

        leaderboardID: req.body.leaderboardID

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error deleting a new leaderboard"});
    })
});

// Edit a specific predictionID for example: adding a user to the leaderboard
router.put('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
    // ! You must give all parameters or they will be set to null
    CreatedLeaderboard.updateOne(
        {"leaderboardID" : req.body.leaderboardID},
        {$set: {
            leaderboardID: req.body.leaderboardID,
            userIDList: req.body.userIDList,
            totalUsers: req.body.totalUsers,
    }

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error editing a leaderboard"});
    });
    
 
});
// Add to UserList
router.put('/userIDList', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    
    // ! You must give all parameters or they will be set to null
    CreatedLeaderboard.updateOne(
        {"leaderboardID" : req.body.leaderboardID},
        { $addToSet: {
            userIDList: req.body.userIDList,
           
    }

    }).then(()=>{
        return res.status(200).json({status:"ok"})
    }).catch(()=>{
        return res.status(400).json({error:"Error editing a leaderboard"});
    });
    
 
});

module.exports = router;