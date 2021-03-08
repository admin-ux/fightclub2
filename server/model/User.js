const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//**Note: Could add a few methods to this schema -> allowing the methods to be used by the appropraite object
//        -> for example the findone object could be a function to check if the user is recorded in the database
//        this is per example of; https://codesource.io/setting-up-vue-authentication-using-expressjs-mongodb-and-jwt/ 

module.exports = User = mongoose.model('users', UserSchema);