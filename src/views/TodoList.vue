<template>
  <div class="todolist-page">
    <h1 class="title">TodoList</h1>
    <TodoApp/>
  </div>
</template>

<script>
import TodoApp from '../components/TodoApp.vue';

export default {
  name: 'todolist-page',
  components: {
    TodoApp,
  },
};
</script>
