

// import { createRouter, createWebHashHistory } from 'vue-router';

// import Login from '../components/LoginForm.vue';
// import Signup from '../components/SignUp.vue';
// import RegistrationSuccess from '../components/RegistrationSuccess.vue'; 
// import LoginSuccessful from '../components/LoginSuccessful.vue';
// import TaskList from '../components/AddTask.vue';
// //Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login,
//   },
//   {
//     path: '/signup',
//     name: 'Signup',
//     component: Signup,
//   },
//   {
//     path: '/registration-success',
//     name: 'RegistrationSuccess',
//     component: RegistrationSuccess,
//   },
//   {
//     path: '/login-successful',
//     name: 'LoginSuccessful',
//     component: LoginSuccessful, // Add a route for LoginSuccessful component
//   },
// //  { path: '/task-list',
// //   name: 'TaskList',
// //   component: TaskList,
// // }
// {
//   path: '/addTask',
//     component: AddTask,
//     meta: { requiresAuth: true },
// }

// ];


// router.beforeEach((to, from, next) => {
//   const isAuthenticated = /* Check if the user is authenticated, maybe using a Vuex store */;
//   if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
//     next('/login'); // Redirect to login if not authenticated
//   } else {
//     next();
//   }
// });

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
//   });
// export default router;

import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '../components/LoginForm.vue';
import Signup from '../components/SignUp.vue';
import RegistrationSuccess from '../components/RegistrationSuccess.vue';
import LoginSuccessful from '../components/LoginSuccessful.vue';
import AddTask from '../components/AddTask.vue'; // Import AddTask component

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
    component: LoginSuccessful,
  },
  {
    path: '/addTask',
    component: AddTask,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Move the beforeEach hook below the router creation
router.beforeEach((to, from, next) => {
  const isAuthenticated = /* Check if the user is authenticated, maybe using a Vuex store */ true;
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
