

<template>
  <div>
    <h2 style="color: #333;">Signup</h2>
    <form @submit.prevent="signup" style="max-width: 300px; margin: auto;">
      <div style="margin-bottom: 15px;">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required style="width: 100%; padding: 8px;" />
      </div>
      <div style="margin-bottom: 15px;">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required style="width: 100%; padding: 8px;" />
      </div>
      <div style="margin-bottom: 15px;">
        <label for="confirmPassword">Confirm Password:</label>
        <input v-model="confirmPassword" type="password" id="confirmPassword" required style="width: 100%; padding: 8px;" />
      </div>
      <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer;">Signup</button>
    </form>
    <div v-if="signupStatus" style="margin-top: 15px; color: #4CAF50;">
      {{ signupStatus }}
      <!-- Redirect to the RegistrationSuccess page after successful signup -->
      <router-link v-if="signupStatus === 'Successfully signed up!'" to="/registration-success" style="color: #4CAF50;">View Registration Details</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const signupStatus = ref(null);

    const signup = async () => {
      if (password.value !== confirmPassword.value) {
        signupStatus.value = 'Passwords do not match';
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/users/register', {
          username: username.value,
          password: password.value,
        });

        signupStatus.value = response.data.message; // Assuming your backend sends a success message
      } catch (error) {
        signupStatus.value = 'Signup failed. Please try again.';
        console.error('Signup Error:', error);
      }
    };

    return { username, password, confirmPassword, signupStatus, signup };
  },
};
</script>
