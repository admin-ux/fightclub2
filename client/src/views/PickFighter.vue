<template fluid>
    <div class="mt-3 mr-3 ml-3">
    <b-card-group deck>
        <b-card header="Joshua vs Fury" class="text-center">
          <b-card-text>
            
              <b-form @submit="createPrediction">
              <b-form-select
                v-model="winner"
                :options="fighter"
                size="sm"
                class="mt-3"
                required 
              ></b-form-select>
              <b-form-select
                v-model="details"
                :options="choices"
                size="sm"
                class="mt-3"
                required 
              ></b-form-select>
              <b-form-select
                v-model="winMethod"
                :options="method"
                size="sm"
                class="mt-3"
                required 
              ></b-form-select>
              <input type="submit" class="btn btn-primary mt-2" value="Create" />
            </b-form>
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
      //fightID: "",
      winMethod: null,
      details: null,
      winner: null,
      fighter:[
        { value: null, text: "Who wins?" },
        { value: "1", text: "Anothoy Joshua" },
        { value: "2", text: "Tyson Fury" },
        { value: "3", text: "Draw" }
        ],
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
  computed: mapGetters(["user"]),

  methods: {
    ...mapActions(["predictionsCreate"]),
    createPrediction() {
      //fightID with be gotten form choice of user of a rendered list of possible fights.
      let newPrediction = {
        userID:localStorage.getItem("userName"), //userID is username
        predictionID: uuidv4(), //wont need this. Wil be done in backend
        fightID: uuidv4(), //actual fight idea
        winner: this.winner,
        winMethod: this.winMethod,
        details: this.details,
      };
      console.log("In pickFighter");
      console.log(newPrediction);
      //this is not premanate 
      console.log(newPrediction.fightID);
      localStorage.setItem("theFightIDofPossiblePrediction", newPrediction.fightID);
      const successfulFightID = localStorage.getItem("theFightIDofPossiblePrediction");
      console.log(successfulFightID);
      
      this.predictionsCreate(newPrediction)
        .then(res => {
          console.log("working hard on res" + res);
          if (res) {
            //const successfulFightID = localStorage.getItem("theFightIDofPossiblePrediction");
            localStorage.setItem("theFightIDofSuccesfulPrediction", localStorage.getItem("theFightIDofPossiblePrediction"));
            console.log("success!");
            this.$router.push("/profile");
            } 
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>