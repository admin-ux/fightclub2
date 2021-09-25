import axios from 'axios';

const state = {
    status: '',
    error: '',
    //might work use {} if no good
    fightObjList: [],
    fightObj:{},
};

const getters = {
    queriedFightByFightID: (state) => state.fightObj,
    queriedFightList: (state) => state.fightObjList,
};

const actions = {
    // Get Specific fight of a specific user
    async fightByFightId ({ commit }, fightID){
        try {
            
        console.log("In vuex");
        console.log(JSON.stringify(fightID));
        
        const response = await axios.get('http://localhost:5000/api/fight', {
            params:
            fightID
            
        } 
        )
        
        console.log("after call");
        
        if(response.data){
            commit('setSpecificFight', response.data);
            return true;
            // commit('prediction_success');
        }
        } catch (err) {
            commit('fight_error', err)
        }
    },
    //show all predictions done by user.
    async Allfights ({ commit }){
        try {
            
        console.log("In vuex");
        // console.log(JSON.stringify(userID));
        
        const response = await axios.get('http://localhost:5000/api/fight')
        
        console.log("after call");
        
        if(response.data){
            commit('setFightList', response.data);
            return true;
            // commit('prediction_success');
        }
        } catch (err) {
            commit('fight_error', err)
        }
    },
    // All predictions for one fightID
   
    async fightCreate({ commit }, newFight){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(newFight));
        
        const response = await axios.post('http://localhost:5000/api/fight', newFight);
        
        console.log("after call");
        
        if(response.data){
            commit('fight_success');
            return true;
        }
        } catch (err) {
            commit('fight_error', err)
        }
    },

    async fightEdit({ commit }, editedFight){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(editedFight));
        
        const response = await axios.put('http://localhost:5000/api/fight', editedFight);
        
        console.log("after call");
        
        if(response.data){
            commit('fight_success');
            return true;
        }
        } catch (err) {
            commit('fight_error', err)
        }
    },
    // Delete 
    async fightDelete({ commit }, deleteFight){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(deleteFight));
        
        const response = await axios.delete('http://localhost:5000/api/fight', deleteFight);
        
        console.log("after call");
        
        if(response.data){
            commit('fight_success');
            return true;
        }
        } catch (err) {
            commit('fight_error', err)
        }
    },
   

};

const mutations = {
    setSpecificFight(state, fightObj){
        state.fightObj = fightObj
    },
    setFightList(state, fightObjList) {
        state.fightObjList = fightObjList;
    },
    fight_success(state) {
        state.error = null
        state.status = 'success'
    },
    fight_error(state) {
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