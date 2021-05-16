// const Validator = require("validator");
// const isEmpty = require("is-empty");
// module.exports = function validatePredictionCreation(data) {
//     let errors = {};
//     // Convert empty fields to an empty string so we can use validator functions
//     data.winner = !isEmpty(data.winner) ? data.winner : "";
//     data.winMethod = !isEmpty(data.winMethod) ? data.winMethod : "";
//     data.details = !isEmpty(data.details) ? data.details : "";
    
//     data.predictionID = !isEmpty(data.predictionID) ? data.predictionID : "";
//     data.fightID = !isEmpty(data.fightID) ? data.fightID : "";
//     data.userID = !isEmpty(data.userID) ? data.userID : "";
 
//     if (Validator.isEmpty(data.winner)) {
//         errors.winner = "Winner field is required";
//     }
//     else if(!Validator.isInt(data.winner)){
//         errors.winner = "Winner field is invalid";
//     }
//     if (Validator.isEmpty(data.winMethod)) {
//         errors.winMethod = "WinMethod field is required";
//     }
//     else if(!Validator.isInt(data.winMethod)){
//         errors.winMethod = "WinMethod field is invalid";
//     }
//     if (Validator.isEmpty(data.details)) {
//         errors.details = "Details field is required";
//     }
//     else if(!Validator.isInt(data.details)){
//         errors.details = "Details field is invalid";
//     }
   
//     if (Validator.isEmpty(data.predictionID)) {
//         errors.predictionID = "PredictionID field is required";
//     }
//     if (Validator.isEmpty(data.fightID)) {
//         errors.fightID = "FightID field is required";}
  
//     if (Validator.isEmpty(data.userID)) {
//         errors.userID = "UserID field is required";}
    
//     return {
//         errors,
//         isValid: isEmpty(errors)
//     };
// };
