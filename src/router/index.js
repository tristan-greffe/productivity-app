import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../views/TodoList.vue';
import SignUp from '../views/SignUp.vue';
import Film from '../views/Film.vue';
import Weather from '../views/Weather.vue';
import Users from '../views/Users.vue';

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
    path: '/weather',
    name: 'weather',
    component: Weather,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
