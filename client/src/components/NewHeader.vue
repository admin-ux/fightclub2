<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" v-if="!isLoggedIn">Jobby Search</b-navbar-brand>
      <b-navbar-brand href="/" v-if="isLoggedIn">Jobby Search</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/pickFighter" v-if="isLoggedIn">Pick'Em</b-nav-item>
          <b-nav-item to="/Edit" v-if="isLoggedIn">Pick'Em Edit</b-nav-item>
          <b-nav-item to="/profile" v-if="isLoggedIn">Profile</b-nav-item>
          <b-nav-item to="/rank" v-if="isLoggedIn">Rank</b-nav-item>
          <b-nav-item to="/rules" v-if="isLoggedIn" >Rules/FAQ</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                  <b-nav-item to="/register" v-if="!isLoggedIn">Register</b-nav-item>
                  <b-nav-item to="/login2" v-if="!isLoggedIn">Login</b-nav-item>
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

<style  scoped>
#nav a.router-link-exact-active {
  background: black;
  border-radius: 10px;
  color: white;
  font-variant: italic;
}
.nav-item.nav-item.nav-item a{
  color: white !important;
}
.navbar.navbar-dark.bg-dark{
    background-color: #b51f1f !important;
 }

</style>