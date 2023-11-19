<template>
    <div>
      <h2>Task List</h2>
      <!-- Add a form to add new tasks -->
      <form @submit.prevent="addTask">
        <label for="newTask">New Task:</label>
        <input type="text" id="newTask" v-model="newTask" required />
        <button type="submit">Add Task</button>
      </form>
  
      <!-- Display existing tasks -->
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
          <button @click="completeTask(index)">Complete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // Remove the unused import statement
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push(this.newTask.trim());
          this.newTask = '';
        }
      },
      completeTask(index) {
        // Remove the completed task
        this.tasks.splice(index, 1);
      },
    },
  };
  </script>
  