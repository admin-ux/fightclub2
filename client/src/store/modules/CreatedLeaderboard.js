import axios from 'axios';

const state = {
    status: '',
    error: '',
    //might work use {} if no good
    createdLeaderboardObjList: [],
    createdLeaderboardObj:{},
};

const getters = {
    
    queriedCreatedLeaderboardByLeaderboardID: (state) => state.createdLeaderboardObj,
    queriedCreatedLeaderboardList: (state) => state.createdLeaderboardObjList,

};

const actions = {
    // Get Specific created leaderboard 
    async createdLeaderboardByLeaderboardID  ({ commit }, leaderboardID) {
        try {
            
        console.log("In vuex");
        console.log(JSON.stringify(leaderboardID));
        
        const response = await axios.get('http://localhost:5000/api/createdleaderboard/info', {
            params:
            leaderboardID
            
        } 
        )
        
        console.log("after call");
        
        if(response.data){
            commit('setSpecificCreatedLeaderboard', response.data);
            return true;
        }
        } catch (err) {
            commit('createdLeaderboard_error', err)
        }
    },
    //Get a list of all users and their data in a specific leaderboard
    async createdLeaderboardUsersList ({ commit }, leaderboardID){
        try {
            
        console.log("In vuex");
        // console.log(JSON.stringify(userID));
        
        const response = await axios.get('http://localhost:5000/api/createdleaderboard/userList', {
            params:
            leaderboardID
            
        } 
        )
        
        console.log("after call");
        
        if(response.data){
            commit('setCreatedLeaderboardUsersList', response.data);
            return true;
            // commit('prediction_success');
        }
        } catch (err) {
            commit('createdLeaderboard_error', err)
        }
    },
    // All predictions for one fightID
   
    async createdLeaderboardCreate({ commit }, newCreatedLeaderboard){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(newCreatedLeaderboard));
        
        const response = await axios.post('http://localhost:5000/api/createdleaderboard', newCreatedLeaderboard);
        
        console.log("after call");
        
        if(response.data){
            commit('createdLeaderboard_success');
            return true;
        }
        } catch (err) {
            commit('createdLeaderboard_error', err)
        }
    },

    async createdLeaderboardEdit({ commit }, editedCreatedLeaderboard){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(editedCreatedLeaderboard));
        
        const response = await axios.put('http://localhost:5000/api/createdleaderboard', editedCreatedLeaderboard);
        
        console.log("after call");
        
        if(response.data){
            commit('createdLeaderboard_success');
            return true;
        }
        } catch (err) {
            commit('createdLeaderboard_error', err)
        }
    },
    // Delete 
    async createdLeaderboardDelete({ commit }, deleteCreatedLeaderboard){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(deleteCreatedLeaderboard));
        
        const response = await axios.delete('http://localhost:5000/api/createdleaderboard', deleteCreatedLeaderboard);
        
        console.log("after call");
        
        if(response.data){
            commit('createdLeaderboard_success');
            return true;
        }
        } catch (err) {
            commit('createdLeaderboard_error', err)
        }
    },
   

};

const mutations = {
    setSpecificCreatedLeaderboard(state, createdLeaderboardObj){
        state.createdLeaderboardObj = createdLeaderboardObj
    },
    setCreatedLeaderboardUsersList(state, createdLeaderboardObjList) {
        state.createdLeaderboardObjList = createdLeaderboardObjList;
    },
    createdLeaderboard_success(state) {
        state.error = null
        state.status = 'success'
    },
    createdLeaderboard_error(state) {
        state.error = null
        state.status = 'error'
    },

    
};

export default {
    state,
    actions,
    mutations,
    getters
};