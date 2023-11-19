<template>
  <div id="app">
    <div class="header">
      <h1 class="app-title">TaskManager</h1>
    </div>
    <div class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/signup" class="nav-link">Signup</router-link>
     
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background-color: #4e5d79; 
  padding: 20px;
}

.app-title {
  color: #fff;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  background-color: #34495e;
  padding: 10px;
}

.nav-link {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: #3498db;
}
</style>
