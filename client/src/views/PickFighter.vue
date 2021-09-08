<template>
  <b-container fluid>
    <b-row>
        <div>
            <b-card title="Register" >
                <b-card-text>
                    <form @submit.prevent="createPrediction">
                        <div class="form-group">
                            <b-form-group
                            
                            id="winMethod"
                            label="winMethod"
                            label-for="winMethod"
                            >
                            <b-form-input 
                            id="winMethod"
                            type="text"
                            placeholder="winMethod"
                            name="winMethod"
                            v-model="winMethod"
                            class="form-control">
                            </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="form-group">
                            <b-form-group
                            id="details"
                            label="details"
                            label-for="details"
                            >
                            <b-form-input 
                            id="details"
                            type="text"
                            placeholder="details"
                            name="details"
                            v-model="details"
                            class="form-control">
                            </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="form-group">
                            <b-form-group
                            id="winner"
                            label="winner"
                            label-for="winner"
                            >
                            <b-form-input 
                            id="winner"
                            type="text"
                            placeholder="winner"
                            name="winner"
                            v-model="winner"
                            class="form-control">
                            </b-form-input>
                            </b-form-group>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Create">
                        </form>
                       </b-card-text>
                       </b-card>
                        </div>
                      </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from 'uuid';
//import PickFighter from '../components/PickEm.vue';
console.log("hi");

export default {
  name: "pickem",
  //components: { "pick-fighter": PickFighter },
  data() {
    return {
      //userID: "",
      //predictionID: "",
      //fightID: "",
      winner: 0,
      winMethod: 0,
      details: 0
    };
},
  computed: mapGetters(["user"]), 

  methods: {
    ...mapActions(["predictionsCreate"]),
    createPrediction(){
      let prediction = {
        userID: "001", //userID is username
        predictionID: uuidv4(),//wont need this. Wil be done in backend
        fightID: uuidv4(),//actual fight idea
        winner: this.winner,
        winMethod: this.winMethod,
        details: this.details
      };
      console.log("In pickFighter");
      console.log( prediction);

      this.predictionsCreate(prediction)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/rank");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

  }
};


</script>