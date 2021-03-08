<template>
  <b-container fluid>
    <b-row>
        <div>
            <b-card title="Login" >
                <b-card-text>
                    <form @submit.prevent="loginUser">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input
                          id="username"
                          type="text"
                          placeholder="Username"
                          name="username"
                          v-model="username"
                          class="form-control"
                        >
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          name="password"
                          id="password"
                          v-model="password"
                        >
                      </div>
                        <!-- <div class="form-group">
                            <b-form-group
                            
                            id="username"
                            label="Username"
                            label-for="username"
                            >
                            <b-form-input 
                            id="username"
                            type="text"
                            placeholder="Username"
                            name="username"
                            v-model="username"
                            class="form-control">
                            </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="form-group">
                            <b-form-group
                            id="password"
                            label="Password"
                            label-for="password"
                            >
                            <b-form-input 
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            v-model="password"
                            class="form-control">
                            </b-form-input>
                            </b-form-group> -->
                        <!-- </div> -->
                        <input type="submit" class="btn btn-primary" value="Login">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <b-link href="/register" variant="primary">Need and account?</b-link >
                    </form>
                </b-card-text>
            </b-card>
        </div>
     
    </b-row>
  </b-container>
</template>


<script>
// gets input, calls login function using input
// if successful router sends user to next appropriate screen
// if unsuccessful catch error user not signed in no router usage
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>