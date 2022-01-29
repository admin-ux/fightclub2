<template>
    <div id="app" class="mt-2 ml-2 mr-2">
        
      <vue-good-table
      :columns="columns"
      :rows="queriedLeaderboardResult"
        :line-numbers="true"
        :sort-options="{
           enabled: true,
           initialSortBy: {field: 'score', type: 'desc'}}"
        styleClass="vgt-table bordered"
/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
      return {
        sortBy: "",
        sortDir: "",
        index:0,
        columns: [
        {
          label: 'Username',
          field: 'userID',
        },
        {
          label: 'Points',
          field: 'score',
          type: 'number',
        },
        {
          label: '%',
          field: 'winPercentage',
          type: 'number',
        },
      ],

      }
    },
    computed: {
       ...mapGetters(['queriedLeaderboardResult']),
},
    methods:{
        ...mapActions(['leaderboardResult']),

    },
    created(){
        this.leaderboardResult();
        
    },
};
</script>

<style>
</style>
