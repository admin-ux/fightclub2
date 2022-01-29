<template>
<div>
<div class="container mt-2">
  <img src="@/assets/vasyl.jpg" alt="Snow" width="100%" 
     height="50%">
  <button class="justAbove">GET STARTED</button> <br>
  <h2 class="centered">Join the Fight!</h2>
  
</div>
<div class="mt-2">
  <hr class="test">
  <h1 >Key features</h1>
  <hr class="test">
</div>
<div class="mt-2 ml-5 mr-5">
<b-card-group deck>
      <b-card bg-variant="" text-variant="black" header="Leaderboards" class="text-center" icon="exclamation-circle">
        <img src="@/assets/leaderboards.png" alt="leaderboards">
        <b-card-text class="mt-3">Join hunderds of others in a live updating leaderboards!</b-card-text>
      </b-card>

      <b-card bg-variant="" text-variant="black" header="Stats" class="text-center">
        <img src="@/assets/stats.png" alt="stats">
        <b-card-text class="mt-3">Track your prediction stats to see how successful you are!</b-card-text>
      </b-card>

      <b-card bg-variant="" text-variant="black" header="Conpletely free!" class="text-center">
        <img src="@/assets/free.png" alt="stats">
        <b-card-text class="mt-3">Most of all we take great pride in making everything on this site completly free!</b-card-text>
      </b-card>
    </b-card-group>
</div>
</div>


</template>

<style>
.container {
  position: relative;
  text-align: center;
  color: white;
}
.justAbove
 {
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 }
/* Centered text */
.centered {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  .justAbove {
  background-color: #b51f1f; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;

}
hr.test{
border: 5px solid green;
  border-radius: 5px;
}
</style>