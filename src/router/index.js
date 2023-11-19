

import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '../components/LoginForm.vue';
import Signup from '../components/SignUp.vue';
import RegistrationSuccess from '../components/RegistrationSuccess.vue'; 
import LoginSuccessful from '../components/LoginSuccessful.vue';
import TaskList from '../components/TaskList.vue';
//Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/registration-success',
    name: 'RegistrationSuccess',
    component: RegistrationSuccess,
  },
  {
    path: '/login-successful',
    name: 'LoginSuccessful',
    component: LoginSuccessful, // Add a route for LoginSuccessful component
  },
 { path: '/task-list',
  name: 'TaskList',
  component: TaskList,
}

];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
export default router;
