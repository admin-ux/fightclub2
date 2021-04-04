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
const FightResult = require('../../model/FightResult');
const Leaderboard = require('../../model/Leaderboard');



// TODO Might switch the name of the file to leaderboard and make the rest of the routes leaderboardresults


// Note: This file is for both leaderboard apis and fight results because of how 
// Note Part 2: interconnected these two path ways are 

// ? May need a way to edit individual leaderboard spots not sure



// Get 
// 1) a specific leaderboard result / user
// 2) specific number of results 
// 3) Get all leaderboard results
// ! Should probably be querying for users and not fights
router.get('/leaderboard/:fightID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
   
    
});

// Accept one result for a fight and 
// 1) Algorithm evaluates result
// 2) Query Predictions of Fight result for all predictions and use algorithm to get points for each user
// 3) Insert to each user leaderboard spot and {user account} ????????????????????? 

// TODO Need a way to roll back changes if theres a failure in calculating scores and adding to db
// TODO Maybe the predictions item needs a value that denotes if its been evaluated and changes that
// TODO value at the end of the process for each user - still need one for users individually

// ! This needs to be tested for massive failure and with a database of 500 - 10,000 users
router.post('/', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
        // 1) Algorithm evaluates result and post newFightResult
        let newFightResult = new FightResult({
            fightID: req.body.fightID,
            fightresultID: req.body.fightresultID,
            winner: req.body.winner,
            winMethod: req.body.winMethod,
            name: req.body.name,
        });
        newFightResult.save()
        .then(()=>{
            return res.status(200).json({status:"ok"})
        }).catch(()=>{
            return res.status(400).json({error:"Error creating a new Fight Result"});
        })
        // 2) Query Predictions of Fight result for all predictions and use algorithm to get
        //  points for each user
        Predictions.find({
            
            fightID: req.body.fightID,
          
        }).then(predictions =>{
            if (!predictions){
                return res.status(404).json({
                    msg: "No fights find for the current fight result.",
                    success: false
                });
            }
            // *********************************************************************
            // 3) Go through Prediction and match to fight result entered add score to 
            // users individual result then input into Database
            // **********************************************************************

            // Could use for each to extract individual predictions in prediction
         
            print("@@@@@@@@@@@@@@@@@@@@@@")
            predictions.forEach(function(singlePrediction)
            {
           

            //3) (A) Query for users Leaderboard results

                Leaderboard.findOne({
                    // Query
                    userID: singlePrediction.userID,
        
                }).then(leaderboardPosition =>{
                    if (!leaderboardPosition){
                        return res.status(404).json({
                            msg: "User from leaderboard not found.",
                            success: false
                        });
                    }
                    // ! Need to check if prediction can be accessed in another query, should work though
                    
                    // Increase Prediction number made
                    leaderboardPosition.totalPredictions=leaderboardPosition.totalPredictions+1

                    if (singlePrediction.winner==req.body.winner)
                    {
                        leaderboardPosition.totalWins=leaderboardPosition.totalWins+1
                    
                    }
                    // ! Make sure this number increased & that they are both int's
                    leaderboardPosition.winPercentage =leaderboardPosition.totalWins/leaderboardPosition.totalPredictions
                    
                    if (singlePrediction.winMethod==req.body.winMethod)
                    {
                        // ! Ask Caleb about scoring system -> This is not correct
                        leaderboardPosition.score=leaderboardPosition.score+1
                    }
                    // ! Make sure this number increased & that they are both int's
                    leaderboardPosition.averagePointsPerWin=leaderboardPosition.score/leaderboardPosition.totalWins

                    leaderboardPosition.save
                    .then(()=>{
                        return res.status(200).json({status:"ok"})
                    }).catch(()=>{
                        return res.status(400).json({error:"Error creating new leaderboard Position for a user"});
                    })
                

                }).catch(()=>{
                    return res.status(400).json({error:"Error in finding predictions for user"});
                })
            

                //3) (B) Add new values and score to results



                //3) (C) Post users new results to Database

            })

        
        }).catch(()=>{
            return res.status(400).json({error:"Error in finding predictions for any users"});
        })

        
        // 3) Insert to each user leaderboard spot and {user account} ?????????????????????     
    
        // ! FightResult
        // fightID: {
        //     type: String,
        //     required: true
        // },
        // fightresultID: {
        //     type: String,
        //     required: true
        // },
        // winner: {
        //     type: Number,
        //     required: true
        // },
        // winMethod: {
        //     type: Number,
        //     required: true
        // },
        // name: {
        //     type: String,
        //     required: true
        // }, 
        // ! prediction
        // predictionID: req.body.predictionID,
        // fightID: req.body.fightID,
        // userID: req.body.userID,
        // winner: req.body.winner,
        // winMethod: req.body.winMethod,
        // details:req.body.details
        // ! leaderboard
        // leaderboardID: {
        //     type: String,
        //     required: true
        // },
        // userID: {
        //     type: String,
        //     required: true
        // },
        // totalPredictions: {
        //     type: Number,
        //     required: true
        // },
        // totalWins: {
        //     type: Number,
        //     required: true
        // },
        // averagePointsPerWin: {
        //     type: Number,
        //     required: true
        // },
        // winPercentage: {
        //     type: Number,
        //     required: true
        // },
        // score: {
        //     type: Number,
        //     required: true
        // }
});
// Delete a specific result and their respective scores
// 1) Find all predictions of users that made a prediction for this fight
// 2) Query each user leaderboard in database 
// 3) Reverse Algorithm 
// 4) Save result to leaderboard 
// 5) Once has been done for all predictions Delete fightResult 
// ! This must be cascading to users and leaderboards
router.delete('/:fightresultID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
        // 
       

        FightResult.findOne({
            // Query
            fightresultID: req.params.fightresultID

        }).then(fightresult =>{
            if (!fightresult){
                return res.status(404).json({
                    msg: "Fight result is not found.",
                    success: false
                });
            }

            // 2) Query Predictions of Fight result for all predictions and use algorithm to get
            //  points for each user
            Predictions.find({
                
                fightID: fightresult.fightID,
            
            }).then(predictions =>{
                if (!predictions){
                    return res.status(404).json({
                        msg: "No fights find for the current fight result.",
                        success: false
                    });
                }
                // *********************************************************************
                // 3) Go through Prediction and match to fight result entered add score to 
                // users individual result then input into Database
                // **********************************************************************

                // Could use for each to extract individual predictions in prediction
            
                print("@@@@@@@@@@@@@@@@@@@@@@")
                predictions.forEach(function(singlePrediction)
                {
            

                //3) (A) Query for users Leaderboard results

                    Leaderboard.findOne({
                        // Query
                        userID: singlePrediction.userID,
            
                    }).then(leaderboardPosition =>{
                        if (!leaderboardPosition){
                            return res.status(404).json({
                                msg: "User from leaderboard not found.",
                                success: false
                            });
                        }
                        // ! Need to check if prediction can be accessed in another query, should work though
                        
                        totalWins=0
                        totalPredictions=0
                        averagePointsPerWin=0
                        winPercentage=0
                        score=0
                        // Increase Prediction number made
                        leaderboardPosition.totalPredictions=leaderboardPosition.totalPredictions-1

                        if (singlePrediction.winner==fightresult.winner)
                        {
                            leaderboardPosition.totalWins=leaderboardPosition.totalWins-1
                        
                        }
                        // ! Make sure this number increased & that they are both int's
                        leaderboardPosition.winPercentage =leaderboardPosition.totalWins/leaderboardPosition.totalPredictions
                        
                        if (singlePrediction.winMethod==fightresult.winMethod)
                        {
                            // ! Ask Caleb about scoring system -> This is not correct
                            leaderboardPosition.score=leaderboardPosition.score-1
                        }
                        // ! Make sure this number increased & that they are both int's
                        leaderboardPosition.averagePointsPerWin=leaderboardPosition.score/leaderboardPosition.totalWins

                        leaderboardPosition.save
                        .then(()=>{
                            return res.status(200).json({status:"ok"})
                        }).catch(()=>{
                            return res.status(400).json({error:"Error creating new leaderboard Position for a user"});
                        })
                    

                    }).catch(()=>{
                        return res.status(400).json({error:"Error in finding predictions for user"});
                    })

                })
    
            }).catch(()=>{
                return res.status(400).json({error:"Error in finding predictions for any users"});
            })


        }).catch(()=>{
            return res.status(400).json({error:"Error in finding the fight result"});
        })

        // Deleting the Result after having completing editing every users leaderboard scores
        FightResult.deleteOne({

            fightresultID: req.params.fightresultID
    
        }).then(()=>{
            return res.status(200).json({status:"ok"})
        }).catch(()=>{
            return res.status(400).json({error:"Error deleting a new fightresult"});
        })
    


});

// Edit a specific result
// ! This must be cascading to users and leaderboards
router.put('/:fightresultID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {

        FightResult.findOne({
            // Query
            fightresultID: req.params.fightresultID

        }).then(fightresult =>{
            if (!fightresult){
                return res.status(404).json({
                    msg: "Fight result is not found.",
                    success: false
                });
            }

            // 2) Query Predictions of Fight result for all predictions and use algorithm to get
            //  points for each user
            Predictions.find({
                
                fightID: fightresult.fightID,
            
            }).then(predictions =>{
                if (!predictions){
                    return res.status(404).json({
                        msg: "No fights find for the current fight result.",
                        success: false
                    });
                }
                // *********************************************************************
                // 3) Go through Prediction and match to fight result entered add score to 
                // users individual result then input into Database
                // **********************************************************************

                // Could use for each to extract individual predictions in prediction
            
                print("@@@@@@@@@@@@@@@@@@@@@@")
                predictions.forEach(function(singlePrediction)
                {
            

                //3) (A) Query for users Leaderboard results

                    Leaderboard.findOne({
                        // Query
                        userID: singlePrediction.userID,
            
                    }).then(leaderboardPosition =>{
                        if (!leaderboardPosition){
                            return res.status(404).json({
                                msg: "User from leaderboard not found.",
                                success: false
                            });
                        }

                        // 3 (B) Remove Previous Results

                        // ! Need to check if prediction can be accessed in another query, should work though
                        
                        // Prediction number made stays the same so its not increased or decreased

                        if (singlePrediction.winner==fightresult.winner)
                        {
                            leaderboardPosition.totalWins=leaderboardPosition.totalWins-1
                        
                        }
                        // ! Make sure this number increased & that they are both int's
                        leaderboardPosition.winPercentage =leaderboardPosition.totalWins/leaderboardPosition.totalPredictions
                        
                        if (singlePrediction.winMethod==fightresult.winMethod)
                        {
                            // ! Ask Caleb about scoring system -> This is not correct
                            leaderboardPosition.score=leaderboardPosition.score-1
                        }
                        // ! Make sure this number increased & that they are both int's
                        leaderboardPosition.averagePointsPerWin=leaderboardPosition.score/leaderboardPosition.totalWins




                        // 3 (B) Evaluate new Results

                        if (singlePrediction.winner==req.body.winner)
                        {
                            leaderboardPosition.totalWins=leaderboardPosition.totalWins+1
                        
                        }
                        // ! Make sure this number increased & that they are both int's
                        leaderboardPosition.winPercentage =leaderboardPosition.totalWins/leaderboardPosition.totalPredictions
                        
                        if (singlePrediction.winMethod==req.body.winMethod)
                        {
                            // ! Ask Caleb about scoring system -> This is not correct
                            leaderboardPosition.score=leaderboardPosition.score+1
                        }
                        // ! Make sure this number increased & that they are both int's
                        leaderboardPosition.averagePointsPerWin=leaderboardPosition.score/leaderboardPosition.totalWins




                        leaderboardPosition.save
                        .then(()=>{
                            return res.status(200).json({status:"ok"})
                        }).catch(()=>{
                            return res.status(400).json({error:"Error creating new leaderboard Position for a user"});
                        })
                    

                    }).catch(()=>{
                        return res.status(400).json({error:"Error in finding predictions for user"});
                    })

                })
    
            }).catch(()=>{
                return res.status(400).json({error:"Error in finding predictions for any users"});
            })


        }).catch(()=>{
            return res.status(400).json({error:"Error in finding the fight result"});
        })

        // Deleting the Result after having completing editing every users leaderboard scores
        FightResult.update(
            {"fightresultID" : req.params.fightresultID},
            {$set: {
                fightID: req.body.fightID,
                fightresultID: req.body.fightresultID,
                winner: req.body.winner,
                winMethod: req.body.winMethod,
                name: req.body.name,
        }
    
        }).then(()=>{
            return res.status(200).json({status:"ok"})
        }).catch(()=>{
            return res.status(400).json({error:"Error editing a prediction"});
        });
        
 
});

module.exports = router;