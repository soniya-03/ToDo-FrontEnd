<template>
  <div class="registration-form-container">
    <form @submit.prevent="register" class="registration-form">
      <h2>Register</h2>

      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" required placeholder="Enter your name">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required placeholder="Enter your email">
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required placeholder="Enter your password">
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style scoped>
.registration-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.registration-form {
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
  background-color: #28a745; /* Green color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838; /* Darker green on hover */
}
</style>
