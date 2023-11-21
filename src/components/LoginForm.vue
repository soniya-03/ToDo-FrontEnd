<template>
  <div class="login-form-container">
    <form @submit.prevent="login" class="login-form">
      <h2>Login</h2>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required placeholder="Enter your email">
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required placeholder="Enter your password">
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
