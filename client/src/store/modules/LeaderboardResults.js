import axios from "axios";
import config from "../../../config/env.js";
const url = config.LOCAL;
const state = {
  status: "",
  error: "",

  leaderboardResultsUserId: [],
  leaderboardResultsLimit: [],
  leaderboardResults: {},
};

const getters = {
  queriedLeaderboardResultByUserIdAndId: (state) =>
    state.leaderboardResultsUserId,
  queriedLeaderboardResultByIdAndLimit: (state) =>
    state.leaderboardResultsLimit,
  queriedLeaderboardResult: (state) => state.leaderboardResults,
};

const actions = {
  // Get a specific leaderboard result by leaderboard and user
  async leaderboardResultByUserIdAndId({ commit }, UserIdObj) {
    try {
      console.log("In vuex");

      const response = await axios.get(url + "/leaderboardresults", {
        params: UserIdObj,
      });

      console.log("after call");
      console.log(JSON.stringify(UserIdObj));

      if (response.data) {
        commit("setLeaderboardResultByUserIdAndId", response.data);
        return true;
        // commit('prediction_success');
      }
    } catch (err) {
      commit("leaderboard_error", err);
    }
  },
  //show specific number of results from a leaderboard.
  async leaderboardResultByIdAndLimit({ commit }, LimitObj) {
    try {
      console.log("In vuex");
      console.log(JSON.stringify(LimitObj));

      const response = await axios.get(url + "/leaderboardresults", {
        params: LimitObj,
      });

      console.log("after call");

      if (response.data) {
        commit("setLeaderboardResultByIdAndLimit", response.data);
        return true;
        // commit('prediction_success');
      }
    } catch (err) {
      commit("leaderboard_error", err);
    }
  },
  // All predictions for one Leaderboard
  async leaderboardResult({ commit }) {
    try {
      console.log("In vuex");

      const response = await axios.get(url + "/leaderboardresults");

      console.log("after call");
      console.log(JSON.stringify(response.data));

      if (response.data) {
        commit("setLeaderboardResult", response.data);
        return true;
      }
    } catch (err) {
      commit("leaderboard_error", err);
    }
  },
  async newLeaderboardResultCreate({ commit }, newLeaderboardResult) {
    try {
      console.log("In vuex");
      console.log(JSON.stringify(newLeaderboardResult));

      const response = await axios.post(
        url + "/leaderboardresults",
        newLeaderboardResult
      );

      console.log("after call");

      if (response.data) {
        commit("leaderboard_success");
        return true;
      }
    } catch (err) {
      commit("leaderboard_error", err);
    }
  },
  //    PUT I believe its the same as the Create
  async newLeaderboardResultEdit({ commit }, editedLeaderboardResult) {
    try {
      console.log("In vuex");
      console.log(JSON.stringify(editedLeaderboardResult));

      const response = await axios.put(
        url + "/leaderboardresults",
        editedLeaderboardResult
      );

      console.log("after call");

      if (response.data) {
        commit("leaderboard_success");
        return true;
      }
    } catch (err) {
      commit("leaderboard_error", err);
    }
  },
  // Delete
  async newLeaderboardResultDelete({ commit }, deleteLeaderboardResult) {
    try {
      console.log("In vuex");
      console.log(JSON.stringify(deleteLeaderboardResult));

      const response = await axios.delete(
        url + "/leaderboardresults",
        deleteLeaderboardResult
      );

      console.log("after call");

      if (response.data) {
        commit("leaderboard_success");
        return true;
      }
    } catch (err) {
      commit("leaderboard_error", err);
    }
  },
};

const mutations = {
  setLeaderboardResultByUserIdAndId(state, leaderboardResultsUserId) {
    state.leaderboardResultsUserId = leaderboardResultsUserId;
  },
  setLeaderboardResultByIdAndLimit(state, leaderboardResultsLimit) {
    state.leaderboardResultsLimit = leaderboardResultsLimit;
  },
  setLeaderboardResult(state, leaderboardResults) {
    state.leaderboardResults = leaderboardResults;
  },
  // user_leaderboard(state, Prediction) {
  //     state.Prediction = Prediction
  // },
  leaderboard_success(state) {
    state.error = null;
    state.status = "success";
  },
  leaderboard_error(state) {
    state.error = null;
    state.status = "error";
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
