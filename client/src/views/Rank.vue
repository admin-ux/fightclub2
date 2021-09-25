<template>
    <div style="overflow-x:auto;">
        <h3>Rank</h3>
        
    <table  id="customers">
  <tr>
    <th>Username</th>
    <th>Points</th>
    <th>Win Percentage</th>
  </tr>
  <tr v-for="result in queriedLeaderboardResult"
        :key="result.userID">
    <td>{{ result.userID }}</td>
    <td>{{ result.score }}</td>
    <td>{{ result.winPercentage }}%</td>
  </tr>
</table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
      return {
        perPage: 10,
        currentPage: 1,
       
      }
    },
    computed: {
       ...mapGetters(['queriedLeaderboardResult']),
},
    methods:{
        ...mapActions(['leaderboardResult']) 
    },
    created(){
        this.leaderboardResult();
    },

};
</script>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

}

#customers td, #customers th {
  border: 20px solid #ddd;
  padding: 8px;
  text-align: center;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #28a745;
  color: white;
}

</style>