<template>
<container>
  <div>
  <b-jumbotron header="Boxing pick'em" lead="Free to play" class="mt-3">
    <p>Pick a fighter to win and compete against other players!</p>
    <b-row>
    <b-col>
              <img src="@/assets/boxingPhoto.jpg" width="83%" 
     height="80%"/>
    </b-col>
    <b-col>
              <img src="@/assets/vasyl.jpg" width="84%" 
     height="80%"/>
    </b-col>
  </b-row>
        <hr class="my-2">
    <b-button variant="primary" to="/register" class="my-4" size="lg">Get Started</b-button>
  </b-jumbotron>
</div>
</container>
</template>