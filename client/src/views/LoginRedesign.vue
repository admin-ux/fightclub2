<template>
    <div>
        <b-container >
              <div class="row">
            <div class="card mx-auto">
                    <b-card 
                    header="Login"
                    header-bg-variant="warning"
                    header-text-variant="dark"
                    >

                    <b-card-text>
                        <form @submit.prevent="loginUser">
                            <b-form-group description="Enter your username"
                            label="Username"
                            >
                            <b-form-input type="username" id="username" v-model="username" placeholder="Username" required></b-form-input>
                            </b-form-group>
                            <b-form-group description="Enter your password"
                            label="Password"
                            >
                            <b-form-input type="password" id="password" v-model="password"  placeholder="Password" required></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                 <input type="submit" class="btn btn-warning" value="Login">
                            </b-form-group>
                        </form>
                    </b-card-text>
                    </b-card>
               </div>
               </div>

        </b-container>
    </div>
    
</template>
<script>
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
<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>