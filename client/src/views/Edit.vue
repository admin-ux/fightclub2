<template fluid>
    <div class="mt-3 mr-3 ml-3">
    <b-card-group deck>
        <b-card header="Joshua vs Fury" class="text-center" header-bg-variant="success" header-text-variant="white"
>
          <b-card-text>
            <form @submit.prevent="updatePrediction">
              <b-form-select
                v-model="winner"
                :options="fighter"
                size="sm"
                class="mt-3"
              ></b-form-select>
              <b-form-select
                v-model="details"
                :options="choices"
                size="sm"
                class="mt-3"
              ></b-form-select>
              <b-form-select
                v-model="winMethod"
                :options="method"
                size="sm"
                class="mt-3"
              ></b-form-select>
             
              <input type="submit" class="btn btn-primary mt-2" value="Create" />
            </form>       
             <div
        v-for="result in queriedPredictionByUserId"
        :key="result.userID">
        {{ result.userID }}
        hello  
        </div>
        
          </b-card-text> 
        </b-card>
    </b-card-group>
     <!-- <button 
    v-on:click="a()">get prediction by user</button>
     -->
</div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
console.log("hi");

export default {
  name: "pickem",
  //components: { "pick-fighter": PickFighter },
  data() {
    return {
      //predictionID: "",
      //fightID: "",
      winMethod: null,
      details: null,
      winner: null,
      userID: null,
      choices: [ 
        { value: null, text: "Method?" },
        { value: "1", text: "KO/TKO" },
        { value: "2", text: "Decision" },
        ],
        method:[
        { value: null, text: "Round?" },
        { value: "1", text: "1-4" },
        { value: "2", text: "5-8" },
        { value: "3", text: "9-12" }
        ]
    };
  },
  computed:{...mapGetters([
     "user","queriedPredictionByUserId","queriedPredictionByFightId","queriedPredictionByIds"]),
  },
  methods: {
    ...mapActions(["predictionEdit", "predictionsByUserId", "predictionsByFightId"]),
    updatePrediction() {
      let editedPredictions = {
        userID: this.userID, //userID is username
        predictionID: "76f44267-b42a-47a5-ac25-ad23601836e5", //wont need this. Wil be done in backend
        fightID: this.fightID, //actual fight idea //list of predictions
        winner: this.winner,
        winMethod: this.winMethod,
        details: this.details,
      };
      console.log("In pickFighter");
      console.log(editedPredictions);
      this.predictionEdit(editedPredictions)
        .then(res => {
          if (res.data.success) {
            console.log("success!");
          }
        })
        .catch(err => {
          console.log(err);
        });

    },
    
  },
  created(){
      //might not get userObject in time.
      const username = localStorage.getItem("userName");
      const fightIDD = localStorage.getItem("theFightIDofSuccesfulPrediction");
      console.log(fightIDD);
      //this.userTest = JSON.parse(userObj);
      this.userID = username;
      console.log("hello world2")
      //console.log(JSON.stringify(this.userTest));
      this.fightID = fightIDD;


      
      let getByUserId = {
        userID: this.userID, //userID is username
      };
      let getByFightId = {
        fightID: this.fightID, //fightID is fightIDD 
      };
      console.log("In pickFighter");
      console.log(getByUserId);
      console.log(getByFightId);
      this.predictionsByUserId(getByUserId)
        .then(res => {
          if (res) {
            console.log("hello succes userID");
          }
        })
        .catch(err => {
          console.log(err);
        });
        this.predictionsByFightId(getByFightId)
  .then(res => {
          if (res) {
            console.log("hello succes fightID");
          }
        })
        .catch(err => {
          console.log(err);
        });
  }

  
};
</script>