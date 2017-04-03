<template>
  <div>
    <input type="input" v-model="todo">

    <button v-on:click="addTodo">Add Todo</button>
  </div>
</template>

<script>
  import TodoHttpService from '../../services/HttpServices';

  const todoApi = new TodoHttpService();

  export default {
    name: 'AddTodo',
    getData() {
      return { todo: '' };
    },
    methods: {
      addTodo() {
        todoApi.post('todo', this.todo);
      },
    },
  };
</script>
