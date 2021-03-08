// // //Will be named post.js(this needs to be renamed) or review.js
// const express = require('express');
// const router = express.Router();
// const mongodb = require('mongodb');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const passport = require('passport');
// const key = require('../../config/keys').secret;
// const Rating = require('../../model/Rating');
// const InitialPost = require('../../model/InitialPost');
// const jwtDecode = require("jwt-decode");

// //Note:This is were all the ratings are found attached
// //     to the initial post

// //Get Ratings -> This is when the initial post is clicked on. On the 
// //               next screen the ratings can be seen **along with 
// //               the initial post**

// router.get('/searchresults/landlordratings/:id', async(req,res) => {
//     const IP_Object= await InitialPost.find({id: req.params.id})

//     const objectofRatings= await Rating.find({IPid: req.params.id})

//       try {
//           res.send(IP_Object+objectofRatings);
//         } catch (err) {
//           res.status(500).send(err);
//         }
// });

// //Add Rating -> In the landlord ratings page you can choose to leave
// //              a comment
// router.post('/searchresults/landlordratings/:id/createreview',passport.authenticate('jwt', {
//     session: false
//     }), (req,res) => {
//     const newRating= new Rating({
//         IPid: req.params.id,//This should be the same as the IP from above 
//         review: req.body.review,
//         rating: req.body.rating,
//         username:jwtDecode(req.headers.authorization).username//this should be same as username of user posting -> token?
//     });
//     if ( !newRating.review || !newRating.rating) {
//         return res.status(400).json({ msg: 'Please include all required fields' });
//       }
//     //Rating.save(newRating);
//     newRating.save();
// });

// //Delete Rating-> This is permitted but if last rating removed
// //                initial post needs to be removed 
// //                Not sure how to implement yet leaving till
// //                later to fix
// // router.delete('/createrating', (req,res) => {
// //     res.send('hello');
// // });   

// //Modify Rating-> Not sure how to implement yet leaving till
// //                later to fix
// // router.post('/createrating', (req,res) => {
// //     res.send('hello');
// // });             







// module.exports = router;