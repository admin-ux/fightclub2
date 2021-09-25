<template>
  <div class="home">
    <b-container>
      <carousel></carousel>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue';
export default {
  name: "home",
  components: {  "carousel": Carousel },
};

</script>
