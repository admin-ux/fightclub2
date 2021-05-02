<template>
  <div>
      <h1>Overall</h1>
        <p class="mt-4">Users: {{ rows }}</p>
    <b-table
      id="my-table"
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :per-page="perPage"
      :current-page="currentPage"
      responsive="sm"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        sortBy: 'rank',
        sortDesc: false,
        fields: [
          { key: 'rank', sortable: true },
          { key: 'user_name', sortable: true },
        ],
        items: [
          { rank: 40, user_name: 'Dickerson',},
          { rank: 21, user_name: 'Larsen', },
          { rank: 89, user_name: 'Geneva', },
          { rank: 38, user_name: 'Jami', }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      },
      amountOfUsers(){
          return this.user_name.length
      }
    }
  }
</script>