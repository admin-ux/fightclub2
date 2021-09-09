import axios from 'axios';

const state = {
    status: '',
    error: '',
    prediction:{},
    //might work use {} if no good
    predictionUserId:[],
    predictionFightId: [],
    predictionIds:{},
    predictionID: null,
};

const getters = {
    
    queriedPredictionByIds: (state) => state.predictionIds,
    queriedPredictionByFightId: (state) => state.predictionFightId,
    queriedPredictionByUserId: (state) => state.predictionUserId,



    // //get a specific fight for a specific user (dont work)
    // getPredictionById: (state) => (userID, fightID) => {
    //     return state.Predictions.find(Prediction => Prediction.id === userID && fightID)
    // },
    // //all fights for a user (should be userID)
    // getAllPredictionsById: (state) => (userID) => {
    //     return state.Predictions.find(Prediction => Prediction.userID === userID)
    // },
    // //get specific fights for fightId
    // getPredictionByFightId: (state) => ( fightID) => {
    //     return state.Predictions.find(Prediction => Prediction.fightID === fightID)
    // },
};

const actions = {
    // Get Specific fight of a specific user
    async predictionsByIds ({ commit }, Ids){
        try {
            
        console.log("In vuex");
        console.log(JSON.stringify(Ids));
        
        const response = await axios.get('http://localhost:5000/api/predictions', {
            params:
                Ids
            
        } 
        )
        
        console.log("after call");
        
        if(response.data){
            commit('setPredictionIds', response.data);
            return true;
            // commit('prediction_success');
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    },
    //show all predictions done by user.
    async predictionsByUserId ({ commit }, userID){
        try {
            
        console.log("In vuex");
        console.log(JSON.stringify(userID));
        
        const response = await axios.get('http://localhost:5000/api/predictions', {
            params:
                userID
            
        } 
        )
        
        console.log("after call");
        
        if(response.data){
            commit('setPredictionUserId', response.data);
            return true;
            // commit('prediction_success');
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    },
    // All predictions for one fightID
    async predictionsByFightId ({ commit }, fightID){
        try {
            
        console.log("In vuex");
        console.log(JSON.stringify(fightID));
       
        const response = await axios.get('http://localhost:5000/api/predictions', {
            params:
                fightID
            
        } 
        )
        
        console.log("after call");
        
        if(response.data){
            commit('setPredictionFightId', response.data);
            return true;
            // commit('prediction_success');
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    },
    async predictionsCreate({ commit }, newPrediction){
        try {
        //const response = await axios.post('http://localhost:5000/api/predictions',);
        console.log("In vuex");
        console.log(JSON.stringify(newPrediction));
        
        const response = await axios.post('http://localhost:5000/api/predictions', newPrediction);
        
        console.log("after call");
        
        if(response.data){
            commit('prediction_success');
            return true;
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    },
    async predictionEdit({ commit }, editedPredictions){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(editedPredictions));
        
        const response = await axios.put('http://localhost:5000/api/predictions', editedPredictions);
        
        console.log("after call");
        
        if(response.data){
            commit('prediction_success');
            return true;
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    },
    // Delete 
    async predictionDelete({ commit }, deletePrediction){
        try {
        console.log("In vuex");
        console.log(JSON.stringify(deletePrediction));
        
        const response = await axios.delete('http://localhost:5000/api/predictions', deletePrediction);
        
        console.log("after call");
        
        if(response.data){
            commit('prediction_success');
            return true;
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    },
   

};

const mutations = {
    setPredictionIds(state, predictionIds){
        state.predictionIds = predictionIds
    },
    setPredictionUserId(state, predictionUserID) {
        state.predictionUserId = predictionUserID;
    },
    setPredictionFightId(state, predictionFightId){
        state.predictionFightId = predictionFightId
    },
    user_prediction(state, Prediction) {
        state.Prediction = Prediction
    },
    prediction_success(state) {
        state.error = null
        state.status = 'success'
    },
    prediction_error(state) {
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