import Vue from 'vue'
import Vuex from 'vuex'

//import Auth from '../Warehouse/Auth';
import Auth from '../store/modules/Auth';
import RatingsAndIPs from '../store/modules/RatingsAndInitialPosts';
import todos from './modules/todos'
import Predictions from '../store/modules/Predictions';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    RatingsAndIPs,
    todos,
    Predictions
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
