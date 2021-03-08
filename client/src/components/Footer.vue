<template>
  <div id="bottom nav">
    <b-navbar type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/login">Login</b-nav-item>
          <b-nav-item href="/profile">Profiles</b-nav-item>
          <b-nav-item href="/register">Register</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
    <div id="TextAndLegal">
      <b-container>
        © RateYourLandLord
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#TextAndLegal {
  background-color: darkgray;
}
</style>
