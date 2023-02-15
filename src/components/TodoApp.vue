<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="todoapp">
    <header class="header">
      <input type="text" class="new-todo" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <setion class="main">
      <ul class="todo-list">
        <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allCompleted">
        <label for="toggle-all">Mark all as complete</label>
        <li class="todo" v-for="(todo, index) in filteredTodos" :key="todo.name" :class="{completed: todo.completed, editing: todo === editing}">
          <div class="view">
            <input type="checkbox" class="toggle" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="destroyTodo(index)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" v-focus="todo === editing" @keyup.esc="cancelEdit">
        </li>
      </ul>
    </setion>
    <footer class="footer" v-show="todos.length > 0">
      <span class="todo-count"><strong>{{ remaining }}</strong> items left</span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: filter === 'all'}" @click.prevent="filter = 'all'">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: filter === 'active'}" @click.prevent="filter = 'active'">Active</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: filter === 'completed'}" @click.prevent="filter = 'completed'">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" :style="[completed() ? {'display': 'block'} : {'display': 'none'}]" @click.prevent="destroyCompleted()">
        Clear completed
      </button>
    </footer>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'todo-app',
  data() {
    return {
      todos: [{
        name: 'Learn VueJs',
        completed: false,
      }],
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: null,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        completed: false,
        name: this.newTodo,
      });
      this.newTodo = '';
    },
    destroyTodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    },
    completed() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
    destroyCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    editTodo(todo) {
      this.editing = todo;
      this.oldTodo = todo.name;
    },
    doneEdit() {
      this.editing = null;
    },
    cancelEdit() {
      this.editing.name = this.oldTodo;
      this.doneEdit();
    },
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    filteredTodos() {
      if (this.filter === 'active') {
        return this.todos.filter((todo) => !todo.completed);
      }
      if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    allCompleted: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todos.forEach((todo) => {
          // eslint-disable-next-line no-param-reassign
          todo.completed = value;
        });
      },
    },
  },
  directives: {
    focus(el, value) {
      if (value) {
        nextTick(() => {
          el.focus();
        });
      }
    },
  },
};
</script>
