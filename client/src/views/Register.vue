//May later include negative feedback if login fails
<template>
  <b-container fluid>
    <b-row>
        <div>
            <b-card title="Register" >
                <b-card-text>
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
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
                            id="name"
                            label="Name"
                            label-for="name"
                            >
                            <b-form-input 
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            v-model="name"
                            class="form-control">
                            </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="form-group">
                            <b-form-group
                            id="email"
                            label="Email"
                            label-for="email"
                            >
                            <b-form-input 
                            id="email"
                            type="text"
                            placeholder="Email"
                            name="email"
                            v-model="email"
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
                            </b-form-group>
                        </div>
                        <div class="form-group">
                            <b-form-group
                            id="confirm_password"
                            label="Confirm Password"
                            label-for="confirm_password"
                            >
                            <b-form-input 
                            id="confirm_password"
                            type="confirm_password"
                            placeholder="Confirm Password"
                            name="confirm_password"
                            v-model="confirm_password"
                            class="form-control">
                            </b-form-input>
                            </b-form-group>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Create">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <b-link href="/login" variant="primary">Already have an account?</b-link >
                    </form>
                </b-card-text>
            </b-card>
        </div>
     
    </b-row>
  </b-container>
</template>


<script>
// gets input, calls register function using input
// if successful router sends user to next appropriate screen
// if unsuccessful catch error user not signed in no router usage
 import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.register(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/login");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>