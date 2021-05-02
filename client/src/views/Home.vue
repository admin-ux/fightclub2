<template>
  <div class="home">
    <b-container>
      <carousel></carousel>
      <b-row >
          <job-card ></job-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from '../components/JobCard.vue';
import Carousel from '../components/Carousel.vue';
export default {
  name: "home",
  components: { "job-card": JobCard, "carousel": Carousel },

};

</script>
