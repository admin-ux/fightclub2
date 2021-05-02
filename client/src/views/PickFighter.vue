<template>
    <pick-fighter></pick-fighter>
</template>
<script>
// @ is an alias to /src
import PickFighter from '../components/PickEm.vue';
export default {
  name: "pickem",
  components: { "pick-fighter": PickFighter },

};

</script>