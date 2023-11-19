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

    <TaskList v-if="loginSuccess" :tasks="tasks" @add-task="addTask" @complete-task="completeTask" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios'; // Import axios here
import TaskList from './TaskList.vue';

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      username: '',
      password: '',
      loginSuccess: false,
      tasks: [],
    };
  },
  methods: {
    ...mapActions(['loginUser']),

    async loginUser() {
      try {
        const credentials = { username: this.username, password: this.password };
        await this.loginUser(credentials);

        // Set loginSuccess to true when login is successful
        this.loginSuccess = true;

        // Retrieve user tasks after successful login
        this.tasks = await this.fetchUserTasks();

        // Redirect to LoginSuccessful component after successful login
        this.$router.push("/login-successful");
      } catch (error) {
        console.error("Login failed", error);
        // Handle login failure
      }
    },

    async fetchUserTasks() {
      // Call the API to fetch the user's tasks
      const response = await axios.get(`/api/users/${this.username}/tasks`);
      return response.data.tasks || [];
    },

    addTask(newTask) {
    
      this.tasks.push(newTask);

     
      axios.post(`/api/users/${this.username}/add-task`, { task: newTask });
    },

    completeTask(index) {
     
      this.tasks.splice(index, 1);

      // Call the API to complete the task for the user
      axios.post(`/api/users/${this.username}/complete-task/${index}`);
    },
  },
};
</script>

<style>

  form {
    max-width: 300px;
    margin: auto;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
</style>

