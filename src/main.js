import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your Vue Router instance
import store from './store'; // Import your Vuex store instance

const app = createApp(App);

// Use the router and store instances
app.use(router);
app.use(store);

app.mount('#app');
