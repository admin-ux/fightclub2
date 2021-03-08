// //Will be named post.js(this needs to be renamed) or review.js
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const InitialPost = require('../../model/InitialPost');
const Rating = require('../../model/Rating');
const jwtDecode = require("jwt-decode");


//Note:This is were all the search requests are pushed through 
//     because the ratings will be stored in reference to the initial
//     posts.
//

//Get Initial Posts: Name and City-> This is initial posts and is where all the 
//                     searchable information is stored. If any 
//                     additional ratings are tied to this initial
//                     post than they will come up when the post
//                     is clicked on.
//Note: There Should Always be one additional rating to every post
//      if the last one is removed the initial post shoould be removed



//This if statement has not been tested
router.post('/searchresults', async (req,res) => {
    //Advanced search
    if (req.body.landlordname && req.body.street && req.body.city && req.body.province && req.body.country)
    {
        const objectofIPs= await InitialPost.find({
            landlordname: req.body.landlordname,
            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country
        });
        try {
            res.send(objectofIPs);
          } catch (err) {
            res.status(500).send(err);
          }
    }
    //Address search
    else if (req.body.street && req.body.city && req.body.province && req.body.country)
    {
        const objectofIPs= await InitialPost.find({
            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country
        });
        try {
            res.send(objectofIPs);
          } catch (err) {
            res.status(500).send(err);
          }
    } 
    //Landlord search
    else if (req.body.landlordname && req.body.city)
    {
        const objectofIPs= await InitialPost.find({
            landlordname: req.body.landlordname,
            city: req.body.city
        });
        try {
            res.send(objectofIPs);
          } catch (err) {
            res.status(500).send(err);
          }
    }
  
    









// router.get('/searchresults/namecity', async (req,res) => {
//     const objectofIPs= await InitialPost.find({
//         landlordname: req.body.landlordname,
//         // street: req.body.street,
//         city: req.body.city,
//         // province: req.body.province,
//         // country: req.body.country
//     });
//     try {
//         res.send(objectofIPs);
//       } catch (err) {
//         res.status(500).send(err);
//       }
    
    // function(err, docs){
    //     if (!err){
    //         res.render('posts', { title: 'verify', results: docs});
    //     }
    //     else{throw err;}
    // })
    // return res.json({
    //     landlordname: req.landlordname
    // });
    
//If search is not working -> https://stackoverflow.com/questions/49436902/mongoose-ignore-parameter-in-query-if-it-is-null

    //Not sure if the path of the request is the current poage or where its
    //comming from
    //Note: This function should have an if statement that decides the querry depending 
    //      on the search box used
    // const initailpost = await db.db('vue_express').collection('initialpost');
    // res.send(await postMessage.find({}).toArray());
});

//Get Initial Posts: Address -> This is initial posts and is where all the 
//                     searchable information is stored. If any 
//                     additional ratings are tied to this initial
//                     post than they will come up when the post
//                     is clicked on.
// router.get('/searchresults/address', async (req,res) => {
//     const objectofIPs= await InitialPost.find({
//         // landlordname: req.body.landlordname,
//         street: req.body.street,
//         city: req.body.city,
//         province: req.body.province,
//         country: req.body.country
//     });
//     try {
//         res.send(objectofIPs);
//       } catch (err) {
//         res.status(500).send(err);
//       }
    
 
// });
//Get Initial Posts: Advanced Search -> This is initial posts and is where all the 
//                     searchable information is stored. If any 
//                     additional ratings are tied to this initial
//                     post than they will come up when the post
//                     is clicked on.
// router.get('/searchresults/advanced', async (req,res) => {
//     const objectofIPs= await InitialPost.find({
//         landlordname: req.body.landlordname,
//         street: req.body.street,
//         city: req.body.city,
//         province: req.body.province,
//         country: req.body.country
//     });
//     try {
//         res.send(objectofIPs);
//       } catch (err) {
//         res.status(500).send(err);
//       }
    
 
// });


//Add Initial Post -> When the initial review is added there 
//                    will always be a rating object required 
//                    to go along with the review
//Note: This route can be accessed after a search
// or on the main page which forces you to enter landlords 
// name but at top of page allows you to add a landlord by
// selecting the option to
//                    **Probably best solution is to post two types of
//                    objects seperately within function
router.post('/searchresults/createpost', passport.authenticate('jwt', {
    session: false
    }), (req,res) => {
    
    const newInitialPost = new InitialPost({
        id: uuid.v4(),
        landlordname: req.body.landlordname,
        street: req.body.street,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country
    });
    const newRating= new Rating({
        IPid: newInitialPost.id,//This should be the same as the one above 
        review: req.body.review,
        rating: req.body.rating,
        username: jwtDecode(req.headers.authorization).username
        //The above username code is will always be correct since a prerequisite to this route is an authenticated user
    });
    
    if (!newInitialPost.landlordname || !newInitialPost.street|| !newInitialPost.city || !newInitialPost.province || !newInitialPost.country || !newRating.review || !newRating.rating) {
        return res.status(400).json({ msg: 'Please include all required fields' });
      }
      //res.send('hello');
    //InitialPost.save(newInitialPost);
    newInitialPost.save();
    //Rating.save(newRating);
    newRating.save();
    res.send("IP",newInitialPost.id,"Rating",newRating.IPid);
    
});

//**Delete Initial Post -> This is not allowed and only occurs 
//                         when all ratings are removed


//Get Initial Posts -> This is initial posts and should appear
//                     along side any additional ratings tied
//                     to this initial post requires the initial
//                     post unique id
//*************this will eventually be changed to
//*************/searchresults/landlordratings/:id
//**************Not sure about the /:id I want all reviews that 
//**************have the initial post id, it should work
// router.get('/landlordratings', (req,res) => {
//     res.send('hello');
// });
router.get('/searchresults/landlordratings/:id', async(req,res) => {
    const IP_Object= await InitialPost.find({id: req.params.id});

    const objectofRatings= await Rating.find({IPid: req.params.id});

    try {
        res.send(IP_Object+objectofRatings);
      } catch (err) {
        res.status(500).send(err);
      }
        
});

router.post('/searchresults/landlordratings/:id/createreview', passport.authenticate('jwt', {
    session: false
    }),  (req,res) => {
    
    const newRating= new Rating({
    
        IPid: req.params.id,//This should be the same as the IP from above 
        review: req.body.review,
        rating: req.body.rating,
        username:jwtDecode(req.headers.authorization).username//this should be same as username of user posting -> token?
    });
    if ( !newRating.review || !newRating.rating) {
        return res.status(400).json({ msg: 'Please include all required fields' });
      }
    
    newRating.save();
    // {
    //   if(err) return res.json(err);
    //   else{res.status(200).json({success:true})}
    // }
   
    //Should probably check if save is successful
    
    
});


module.exports = router;