const mongoose = require('mongoose');

//Could setup two connections 1 to production db and one to dev
// Bring in the Database Config and connect with the database 
//using the ORM (Object Related Mapping)

const db = require('../config/keys').mongoURI;
mongoose.connect(db, { 
    useNewUrlParser:true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});