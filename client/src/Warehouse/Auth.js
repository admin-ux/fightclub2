// //Warehouse folder contains all modules
// //Current Vuex Module: Authentication module 
// //Description: 
// import axios from 'axios';
// import router from '../router';

// //**Probably will be adding initial post here and review because they are elements of data that will need to be changed and 
// //require authentication before the action of posting can be done 
// const state = {
//     token: localStorage.getItem('token') || '',
//     user: {},
//     status: '',
//     error: null
// };

// const getters = {
//     // isLoggedIn: function (state) {
//     //     if (state.token != '') {
//     //         return true
//     //     } else {
//     //         return false
//     //     }
//     // }
//     isLoggedIn: state => !!state.token,
//     authState: state => state.status,
//     user: state => state.user,
//     error: state => state.error
// };

// const actions = {
//     // Login Action
//     async login({
//         commit
//     }, user) {
//         commit('auth_request');
//         try {
//             let res = await axios.post('http://localhost:5000/api/users/login', user)
//             // if editing on local http://localhost:5000/api/users/login
//             // if preparing for launching api/users/login
//             if (res.data.success) {
//                 const token = res.data.token;
//                 const user = res.data.user;
//                 // Store the token into the localstorage
//                 localStorage.setItem('token', token);
//                 // Set the axios defaults
//                 axios.defaults.headers.common['Authorization'] = token;
//                 commit('auth_success', token, user);
//             }
//             return res;
//         } catch (err) {
//             commit('auth_error', err);
//         }
//     },
//     // Register User
//     async register({
//         commit
//     }, userData) {
//         try {
//             commit('register_request');
//             let res = await axios.post('http://localhost:5000/api/users/register', userData);
//             // if editing on local http://localhost:5000/api/users/register
//             // if preparing for launching api/users/register
//             if (res.data.success !== undefined) {
//                 commit('register_success');
//             }
//             return res;
//         } catch (err) {
//             commit('register_error', err)
//         }
//     },
//     // Get the user Profile
//     async getProfile({
//         commit
//     }) {
//         commit('profile_request');
//         let res = await axios.get('http://localhost:5000/api/users/profile')
//         // if editing on local http://localhost:5000/api/users/profile
//         // if preparing for launching api/users/profile
//         commit('user_profile', res.data.user)
//         return res;
//     },
//     // Logout the user
//     async logout({
//         commit
//     }) {
//         await localStorage.removeItem('token');
//         commit('logout');
//         delete axios.defaults.headers.common['Authorization'];
//         router.push('/login');
//         return
//     }
// };

// const mutations = {
//     auth_request(state) {
//         state.error = null
//         state.status = 'loading'
//     },
//     auth_success(state, token, user) {
//         state.token = token
//         state.user = user
//         state.status = 'success'
//         state.error = null
//     },
//     auth_error(state, err) {
//         state.error = err.response.data.msg
//     },
//     register_request(state) {
//         state.error = null
//         state.status = 'loading'
//     },
//     register_success(state) {
//         state.error = null
//         state.status = 'success'
//     },
//     register_error(state, err) {
//         state.error = err.response.data.msg
//     },
//     logout(state) {
//         state.error = null
//         state.status = ''
//         state.token = ''
//         state.user = ''
//     },
//     profile_request(state) {
//         state.status = 'loading'
//     },
//     user_profile(state, user) {
//         state.user = user
//     }
// };

// export default {
//     state,
//     actions,
//     mutations,
//     getters
// };