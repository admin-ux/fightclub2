//Current Vuex Module: Authentication module 
//Description: 
import axios from 'axios';
//import router from '../../router';

//**Probably will be adding initial post here and review because they are elements of data that will need to be changed and 
//require authentication before the action of posting can be done 
const state = {
    queryofIPs: {},
    searchparameters:{},
    IP:{},
    queryofRatings:{}
    // status: '',
    // error: null
};

const getters = {
    queriedInitialPosts: state => state.queryofIPs,
    queriedRatings: state=> state.queryofRatings
    // error: state => state.error
};

const actions = {
    //Initial Posts
    async fetchInitialPosts({commit}, searchparameters){
        // commit('making_query');
        // try{
        
        console.log("BBBBBBBB");
        console.log(searchparameters);
        let res = await axios.post('http://localhost:5000/api/initialpost/searchresults', searchparameters)
        
        console.log("CCCCCCCC");
        console.log(res);
        commit('setSearchResults', res.data);
        // if (res.data) {
        //     const searchparameters = res.data.searchparameters;
        
        //  }
        return res.data;
        // }catch (err) {
        //     commit('query_error', err);
        // }
        //router.push('/SearchResults');
    },

    async createInitialPosts({commit}, newIP){
        // commit('making_query');
        // try{
        
        console.log("DDDDDDDDDD");
        console.log(newIP);
        let res = await axios.post('http://localhost:5000/api/initialpost/searchresults', newIP)
        
        //Should just return some success message or failure message
        console.log("EEEEEEEEEEE");
        console.log(res);
        commit('setSearchResults', res.data);
        // if (res.data) {
        //     const searchparameters = res.data.searchparameters;
        
        //  }
        return res.data;
        // }catch (err) {
        //     commit('query_error', err);
        // }
        //router.push('/SearchResults');
    },


    //Ratings
    async fetchRatings({commit}, IPid){
        const response = await axios.get('http://localhost:5000/api/initialpost/searchresults/landlordratings/'+ IPid);
        
        //Should ratings of specific IP 
        commit('setRatingsResults', response.data);
    },
    async newRating({commit}, IPid, Rating){
        const response = await axios.post('http://localhost:5000/api/initialpost/searchresults/landlordratings/'+ IPid +'/createreview',Rating);
        //Should return success or error message
        commit('FIX', response.data);
    }
};

const mutations = {
    // making_query(state) {
    //     state.error = null
    //     state.status = 'loading'
    // },
    // query_error(state, err) {
    //     state.error = err.response.data.msg
    // },
    setSearchResults: (state, queryofIPs) => (state.queryofIPs = queryofIPs),
    setRatingsResults: (state, queryofRatings) => (state.queryofRatings = queryofRatings),
};

export default {
    state,
    actions,
    mutations,
    getters
};