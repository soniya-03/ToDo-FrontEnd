<template>
  <div>
    <h2 style="color: #4CAF50;">Registration Successful</h2>
    <p>Congratulations! You have successfully registered.</p>
   
    <router-link to="/task-list" style="color: #4CAF50; margin-left: 10px;">Go to Task List</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  components: {
    RouterLink,
  },
  
});
</script>

<style scoped>

div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
}
</style>
