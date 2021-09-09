//probably removing from user.js and app.js -> this file is for access to my routes
// import session from './session';
import user from './users';
import predictions from './predictions';
import friends from './friends';
import leaderboardresults from './leaderboardresults';
import fight from './fight';
import createdleaderboard from './createdleaderboard';
 
export default {
  leaderboardresults,
  user,
  predictions,
  friends,
  fight,
  createdleaderboard
};