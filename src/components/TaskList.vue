<template>
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
</script>
