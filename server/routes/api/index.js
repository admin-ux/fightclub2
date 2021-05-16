//probably removing from user.js and app.js -> this file is for access to my routes
// import session from './session';
import user from './users';
import predictions from './predictions';
import friends from './friends';
import leaderboardresults from './leaderboardresults';
 
export default {
  leaderboardresults,
  user,
  predictions,
  friends,
};