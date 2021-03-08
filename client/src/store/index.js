import Vue from 'vue'
import Vuex from 'vuex'

//import Auth from '../Warehouse/Auth';
import Auth from '../store/modules/Auth';
import RatingsAndIPs from '../store/modules/RatingsAndInitialPosts';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    RatingsAndIPs
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
