const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
//var crypto = require('crypto');
const passport = require('passport');
const connection = require('./config/database');

const MongoStore = require('connect-mongo')(session);

/**
 * -------------- GENERAL SETUP ----------------
 */
// Initialize the app by creating an express aplication named -> "app"
const app = express();
// require('./config/database');

// Middleware
// From Data Middleware
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: false 
}));

// Json Body Middleware
// support parsing of application/json type post data
app.use(bodyParser.json());
//BodyParser: Handles HTTP POST request in Express.js version 4 and above, 
//you need to install middleware module called body-parser.
//body-parser extracts the entire body portion of an incoming 
//request stream and exposes it on req.body


// Cors Middleware
app.use(cors());
//Cors: Cross-origin resource sharing (CORS) allows AJAX requests to skip 
//the Same-origin policy and access resources from remote hosts.

// Setting up the static directory
//app.use(express.static(path.join(__dirname, 'public')));//*May have to recreate this collection of files
//Static Directory: Static files are files that clients download as they are 
//from the server. Create a new directory, public. 
//Express, by default does not allow you to serve static files. You need
// to enable it using the following built-in middleware.




/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */
//Use the passport Middleware
app.use(passport.initialize());
//Bring in the Passport Stradegy
require('./config/passport')(passport);


/**
 * -------------- ROUTES ----------------
 */

// app.get('/', (req, res) =>{
//     return res.send("<h1>Hello World</h1>")
// })
// Bring in the Users route
const users = require('./routes/api/users');
//**Created
// const session = require('./routes/api/session');
const rating = require('./routes/api/rating');
const initialpost = require('./routes/api/initialpost');

app.use('/api/users',users);
// app.use('/api/session', session);
app.use('/api/rating', rating);
app.use('/api/initialpost', initialpost);
//** 



//**After testing */
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })



/**
 * -------------- SERVER ----------------
 */
//Probably should hide the port in a "".env" file using 
//"dotenv" thats what the .env.Port is for
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})