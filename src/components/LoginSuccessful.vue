<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>

    <!-- Display LoginSuccessful component when login is successful -->
    <LoginSuccessful v-if="loginSuccess" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LoginSuccessful from './LoginSuccessful.vue';

export default {
  components: {
    LoginSuccessful,
  },
  data() {
    return {
      username: '',
      password: '',
      loginSuccess: false,
    };
  },
  methods: {
    ...mapActions(['loginUser']), // Assuming you have an action named 'loginUser' in your Vuex store

    async loginUser() {
      try {
        const credentials = { username: this.username, password: this.password };
        await this.loginUser(credentials);

        // Set loginSuccess to true when login is successful
        this.loginSuccess = true;

        // Redirect to LoginSuccessful component after successful login
        this.$router.push("/login-successful");
      } catch (error) {
        console.error("Login failed", error);
        // Handle login failure
      }
    },
  },
};
</script>

<style>

</style>
