import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../views/TodoList.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
