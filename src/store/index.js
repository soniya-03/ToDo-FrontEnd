// import { createStore } from 'vuex';
// import axios from 'axios';

// export default createStore({
//   state: {
//     user: null, // Initially, the user is not authenticated
//   },
//   mutations: {
//     // Mutation to set the authenticated user in the state
//     SET_USER(state, user) {
//       state.user = user;
//     },
//   },
//   actions: {
//     async login({ commit }, credentials) {
//       try {
//         // Make an API call to authenticate the user
//         const response = await axios.post('http://localhost:3000/users/login', credentials);
        
//         // Assuming your backend sends user information upon successful login
//         const user = response.data;

//         // Commit a mutation to update the state with the authenticated user
//         commit('SET_USER', user);

//         // You can also return a promise to handle the login success in the component
//         return Promise.resolve(user);
//       } catch (error) {
//         console.error('Login failed', error);
//         // Handle login failure
//         return Promise.reject(error);
//       }
//     },
//   },
//   getters: {
//     // Getter to retrieve the current user
//     getUser: (state) => state.user,
//   },
// });




// store/index.js

import { createStore } from 'vuex';
import axios from 'axios';

const apiUrl = 'http://localhost:3000'; // Replace with your actual backend API URL

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post(`${apiUrl}/users/login`, credentials);
        const user = response.data;
        commit('SET_USER', user);
        return Promise.resolve(user);
      } catch (error) {
        console.error('Login failed', error);
        return Promise.reject(error);
      }
    },
    // Add additional actions for signup, fetching user tasks, etc.
  },
  getters: {
    getUser: (state) => state.user,
  },
});

