import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../views/TodoList.vue';
import SignUp from '../views/SignUp.vue';
import Film from '../views/Film.vue';
import Meteo from '../views/Meteo.vue';
import Users from '../views/Users.vue';
import Velib from '../views/Velib.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/film',
    name: 'film',
    component: Film,
  },
  {
    path: '/meteo',
    name: 'meteo',
    component: Meteo,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/velib',
    name: 'velib',
    component: Velib,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
