<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <!-- <img
          :src="require('../assets/canadian-containers-logo2small.png')"
          alt="Canadian Containers"
        /> -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav ml-auto>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/login" v-if="!isLoggedIn">Login</b-nav-item>
          <b-nav-item href="/profile" v-if="isLoggedIn">Profiles</b-nav-item>
          <b-nav-item href="/register" v-if="!isLoggedIn">Register</b-nav-item>
          <b-nav-item href="/searchresults" v-if="!isLoggedIn">SearchResults</b-nav-item>
          <b-nav-item href="/createpost" v-if="!isLoggedIn">CreatePost</b-nav-item>
          <b-nav-item href="/createrating" v-if="!isLoggedIn">CreateRating</b-nav-item>
          <b-nav-item href="/landlordreviews" v-if="!isLoggedIn">LandlordReviews</b-nav-item>
          <b-nav-item href="/logout" v-if="isLoggedIn" @click.prevent="logoutUser">Logout</b-nav-item>
        
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style></style>
