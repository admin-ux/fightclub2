<template>
    <div>
        <h3>Rank</h3>
        <div>
          <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
            <b-table striped hover :items="allTodos" :per-page="perPage"
      :current-page="currentPage"></b-table>
    </div>

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
    name:"Todos",
    methods:{
        ...mapActions(['fetchTodos']) 
    },
    created(){
        this.fetchTodos();
    },
     computed: {
       ...mapGetters(['allTodos']),
      rows() {
        return this.allTodos.length
      }
}
}
</script>

<style>
 .todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

</style>