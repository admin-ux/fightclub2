import axios from 'axios';

const state = {
    status: '',
    prediction:{},
    //might work use {} if no good
    predictionUserId:[],
    predictionFightId: [],
    predictionID: null,
};

const getters = {
    //get specific a specific fight for a specific user (dont work)
    ggetPredictionById: (state) => (userID, fightID) => {
        return state.Predictions.find(Prediction => Prediction.id === userID && fightID)
    },
    //all fights for a user (should be userID)
    getAllPredictionsById: (state) => (userID) => {
        return state.Predictions.find(Prediction => Prediction.userID === userID)
    },
    //get specific fights for fightId
    getPredictionByFightId: (state) => ( fightID) => {
        return state.Predictions.find(Prediction => Prediction.fightID === fightID)
    },
};

const actions = {
    //show all predictions done by user.
    async predictionsByUserId ({ commit }, userID){
        const response = await axios.get('http://localhost:5000/api/predictions', userID );
        commit('setPredictionUserId', response.data.predictions);
    },
    // All predictions for one fightID
    async predictionsByFightId ({ commit }, fightID){
        const response = await axios.get('http://localhost:5000/api/predictions', fightID );
        commit('setPredictionFightId', response.data.predictions);
    },
    async predictionsCreate({ commit }, newPrediction){
        try {
        //const response = await axios.post('http://localhost:5000/api/predictions',);
        console.log("In vuex");
        console.log(JSON.stringify(newPrediction));
        const response = await axios.post('http://localhost:5000/api/predictions', newPrediction);
        console.log("hello world");
        if(response.data.success){
            commit('prediction_success');
        }
        } catch (err) {
            commit('prediction_error', err)
        }
    }
};

const mutations = {
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