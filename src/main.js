// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router'; // Import your Vue Router instance
// import store from './store'; // Import your Vuex store instance

// const app = createApp(App);

// // Use the router and store instances
// app.use(router);
// app.use(store);

// app.mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router'; // Import your Vue Router instance
import store from './store'; // Import your Vuex store instance

const app = createApp(App);

// Set the base URL for your NestJS API
axios.defaults.baseURL = 'http://localhost:3000';

// Use the router and store instances
app.use(router);
app.use(store);

// Make axios available globally in the app
app.config.globalProperties.$axios = axios;

app.mount('#app');
