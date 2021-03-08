const path = require('path');
const fs = require('fs');
// module.exports = {
//     mongoURI: "mongodb://localhost:27017/meven_auth",
//     secret: 'yoursecret'
// };
//MongoURI should be saved as a .env
//mongodb+srv://Admin:<password>@cluster0.lguyp.mongodb.net/<dbname>?retryWrites=true&w=majority
//Check original tutorial to see if how he saves the later db is how you think he will
const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');


if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://Admin:<password>@cluster0.lguyp.mongodb.net/<dbname>?retryWrites=true&w=majority",
        secret: PUB_KEY
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/fightclub_auth",
        secret: PUB_KEY
    };
}