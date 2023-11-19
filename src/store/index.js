import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null, // Initially, the user is not authenticated
  },
  mutations: {
    // Mutation to set the authenticated user in the state
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        // Make an API call to authenticate the user
        const response = await axios.post('http://localhost:3000/users/login', credentials);
        
        // Assuming your backend sends user information upon successful login
        const user = response.data;

        // Commit a mutation to update the state with the authenticated user
        commit('SET_USER', user);

        // You can also return a promise to handle the login success in the component
        return Promise.resolve(user);
      } catch (error) {
        console.error('Login failed', error);
        // Handle login failure
        return Promise.reject(error);
      }
    },
  },
  getters: {
    // Getter to retrieve the current user
    getUser: (state) => state.user,
  },
});
