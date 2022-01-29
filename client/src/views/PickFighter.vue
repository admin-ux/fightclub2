<template fluid>
  <div class="mt-3 mr-3 ml-3">
    <b-card-group columns>
      <b-card
      >
        <b-card-text>
          <h2>Make prediction</h2>
          
<b-tabs content-class="mt-3" fill >
    <b-tab :title="result.name" active v-for="result in queriedFightList"
        :key="result.fightID"
        v-bind:value="result.fighter1">
  
  <br>
  <select v-model="winner" required>
              <option value="null">Pick winner</option>
              <option value="1">{{ result.fighter1 }}</option>
              <option value="2">{{ result.fighter2 }}</option>
            </select>
  <select v-model="winMethod" required>
    <option value="null">Method</option>
    <option value="1">KO/TKO</option>
    <option value="2">Decision</option>
  </select>

  <input type="radio" id="1" :value="1" v-model="details">
  <label for="one">1-4</label>
  <input type="radio" id="2" :value="2" v-model="details">
  <label for="one">5-8</label>
  <input type="radio" id="2" :value="3" v-model="details">
  <label for="one">9-12</label>
  <br>
  
            <button v-on:click="createPrediction">Create</button>
        </b-tab>
  </b-tabs>

        </b-card-text>
      </b-card>
      <b-card>
        <b-card-text>
          <h2>Predictions completed</h2>
          <div
        v-for="result in queriedPredictionByUserId"
        :key="result.userID">
        {{ result.winner }} - {{ result.winMethod }} - {{ result.details }} 
        <button class="btn btn-danger btn-sm" @click="predictionDelete(result.winner)">Delete</button>
        
          
        </div>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "pickem",
  //components: { "pick-fighter": PickFighter },
  data() {
    return {
      //userID: "",
      //predictionID: "",
      //fightID: ,
      winMethod: null,
      details: null,
      winner: null,
      winner2: null,

      choices: [
        { value: null, text: "Method?" },
        { value: "1", text: "KO/TKO" },
        { value: "2", text: "Decision" },
      ],
      method: [
        { value: null, text: "Round?" },
        { value: "1", text: "1-4" },
        { value: "2", text: "5-8" },
        { value: "3", text: "9-12" },
      ],
    };
  },
  computed: mapGetters(["user", "queriedFightList", "queriedFightByFightID", "queriedPredictionByUserId"]),

  methods: {
    ...mapActions(["predictionsCreate", "Allfights", "fightByFightId", "predictionsByUserId", "predictionDelete"]),
    createPrediction() {
      //fightID with be gotten form choice of user of a rendered list of possible fights.
      let newPrediction = {
        userID: localStorage.getItem("userName"), //userID is username
        predictionID: uuidv4(), //wont need this. Wil be done in backend
        fightID: uuidv4(), //actual fight idea
        winner: this.winner || this.winner2,
        winMethod: this.winMethod,
        details: this.details,
      };
      console.log("In pickFighter");
      console.log(newPrediction);
      //this is not premanate
      console.log(newPrediction.fightID);
      localStorage.setItem(
        "theFightIDofPossiblePrediction",
        newPrediction.fightID
      );
      const successfulFightID = localStorage.getItem(
        "theFightIDofPossiblePrediction"
      );
      console.log(successfulFightID);

      this.predictionsCreate(newPrediction)
        .then((res) => {
          console.log("working hard on res" + res);
          if (res) {
            //const successfulFightID = localStorage.getItem("theFightIDofPossiblePrediction");
            localStorage.setItem(
              "theFightIDofSuccesfulPrediction",
              localStorage.getItem("theFightIDofPossiblePrediction")
            );
            console.log("success!");
            this.$router.push("/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      this.predictionDelete()
      .then((res) => {
          console.log("working hard on res" + res);
          if (res) {
            //const successfulFightID = localStorage.getItem("theFightIDofPossiblePrediction");
            localStorage.setItem(
              "theFightIDofSuccesfulPrediction",
              localStorage.getItem("theFightIDofPossiblePrediction")
            );
            console.log("success!");
            this.$router.push("/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.Allfights(); 
    //might not get userObject in time.
      const username = localStorage.getItem("userName");
      //const fightIDD = localStorage.getItem("theFightIDofSuccesfulPrediction");
      //console.log(fightIDD);
      //this.userTest = JSON.parse(userObj);
      this.userID = username;
      //console.log(JSON.stringify(this.userTest));
      //this.fightID = fightIDD;

    let getByUserId = {
        userID: this.userID, //userID is username
      };
    
    this.fightByFightId(this.fightID)
        .then((res) => {
          console.log("working hard on res " + res);
          if (res) {
            console.log("successful query of specific fightID!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    this.predictionsByUserId(getByUserId)
        .then(res => {
          if (res) {
            console.log("hello succes userID");
          }
        })
        .catch(err => {
          console.log(err);
        });
  },
};
</script>