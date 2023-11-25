<!-- AddTask.vue
<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <label>Task:</label>
      <input v-model="task" type="text" required />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    async addTask() {
      try {
        const response = await axios.post('http://localhost:3000/users/addTask', {
          task: this.task,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    },
  },
};
</script> -->



<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <label>Task:</label>
      <input v-model="task" type="text" required />
      <button type="submit">Add Task</button>
    </form>

    <h2>Task List</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: '',
      tasks: [], // Array to store tasks
    };
  },
  methods: {
    async addTask() {
      try {
        const response = await axios.post('http://localhost:3000/users/addTask', {
          task: this.task,
        });
        console.log(response.data);
        // Assuming the response.data is the added task, you can add it to the tasks array
        this.tasks.push(response.data.task);
        this.task = ''; // Clear the input field after adding the task
      } catch (error) {
        console.error(error.response.data);
      }
    },
    deleteTask(index) {
      // Assuming you have an API endpoint to delete a task by index
      const taskToDelete = this.tasks[index];
      axios.delete(`http://localhost:3000/users/deleteTask/${taskToDelete}`)
        .then(response => {
          console.log(response.data);
          this.tasks.splice(index, 1); // Remove the task from the tasks array
        })
        .catch(error => {
          console.error(error.response.data);
        });
    },
  },
};
</script>

