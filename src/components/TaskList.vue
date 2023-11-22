<!--  <template>
  <div class="task-list-container">
    <h2>Task List</h2>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </div>
</template>

<style scoped>
.task-list-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 3px;
}

li:hover {
  background-color: #e9ecef;
}
</style>

<script>
import { userService } from '@/api/api';

export default {
  data() {
    return {
      tasks: [],
    };
  },
  async mounted() {
    try {
      const response = await userService.getTasks();
      this.tasks = response.data;
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  },
};
</script> -->


<!-- <template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <label>Task:</label>
      <input v-model="task" required />
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
        const response = await axios.post('http://localhost:3000/users/add', {
          task: this.task,
        }, {
          headers: {
            //Authorization: `Bearer ${yourStoredToken}`, // Include the user's token here
          },
        });
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error(error.response.data); // Handle errors
      }
    },
  },
};
</script> --> 

<!-- AddTask.vue -->
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
        // Assuming you have the user's token stored in localStorage
        const token = localStorage.getItem('token');

        await axios.post(
          'http://localhost:3000/users/addTask',
          { task: this.task },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Assuming a successful task addition
        console.log('Task added successfully');
      } catch (error) {
        console.error(error.response.data); // Handle errors
      }
    },
  },
};
</script>
