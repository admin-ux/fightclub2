import Vue from 'vue'
import Vuex from 'vuex'


import Auth from '../store/modules/Auth';
import RatingsAndIPs from '../store/modules/RatingsAndInitialPosts';

import Predictions from '../store/modules/Predictions';
import CreatedLeaderboard from '../store/modules/CreatedLeaderboard';
import LeaderboardResults from '../store/modules/LeaderboardResults';
import Fight from '../store/modules/Fight';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    RatingsAndIPs,
    Predictions,
    CreatedLeaderboard,
    LeaderboardResults,
    Fight,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
