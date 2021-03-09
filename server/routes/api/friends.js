const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
// const InitialPost = require('../../model/InitialPost');
// const Rating = require('../../model/Rating');
const jwtDecode = require("jwt-decode");

// Note: friendlist might become a seperate data structure

// Right now friends.js encompasses both "friend" model and
// "friendlist" model 

// Get a specific friendlist
// router.get('/:friendlistID', passport.authenticate('jwt', {
//     session: false
//     }), (req, res) => {
    
          
// });
// Create a friendlist 
// ****
// ? Should I add a friendlist on creation of a user or the first time
// ? a friend is created for a user

// router.post('/friendlist', passport.authenticate('jwt', {
//     session: false
//     }), (req, res) => {
    
    
// });
// Get a specific friend from a users friendlist, 
// if none provided get the friendlist associated
// with that user, if no friend list throw an 
// error saying user has connected with no friends 
router.get('/:userID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    // Get users friendlist if no req/ param
    if (!req){}
    // Get a specific user if friendID is provided 
    else{}
   
});
// Create a friend and add to friend list
// ****
// If you add a friend to a user it must add the friend
// to the user's friend list
// ****
// Might be able to remove friendlistID if frienlist is attached to user
router.post('/:friendlistID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
    
    // if no friendlist exists or none is provided for user one must be created
    if(!req){

    }
    // else friend is created and added to existing friendlist
    else{

    }
    
});
// remove specific friend from users friendlist
router.delete('/:userID', passport.authenticate('jwt', {
    session: false
    }), (req, res) => {
       
    
});


module.exports = router;