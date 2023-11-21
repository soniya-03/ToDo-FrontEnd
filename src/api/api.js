
// const baseApiUrl = 'http://localhost:3000'; // Replace with your actual backend API URL

// export default baseApiUrl;
// api.js

import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your actual API base URL

const api = axios.create({
  baseURL,
});

export const userService = {
  async loginUser(credentials) {
    // Implement your login logic
    return api.post('/login', credentials);
  },

  async registerUser(userData) {
    // Implement your user registration logic
    return api.post('/register', userData);
  },

  async getTasks() {
    // Implement logic to fetch tasks
    return api.get('/tasks');
  },
};
