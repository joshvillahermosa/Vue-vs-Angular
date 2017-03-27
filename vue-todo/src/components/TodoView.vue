<template>
  <div class="center">
    <h1>{{ title }}</h1>

    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
  /* eslint-disable */
  import TodoList from '@/components/shared/TodoList';
  import TodoHttpService from '../services/HttpServices';

  const todoApi = new TodoHttpService();

  /**
   * For the love of god this needs to get refactored. Sorry.
   */
  export default {
    name: 'TodoView',
    components: { TodoList },
    beforeRouteEnter(to, from, next) {
      todoApi.get('todo').then((data) => {
        next((vm) => {
          /* eslint-disable */
          vm.todos = data.body;
        });
      });
    },
    data() {
      return {
        title: 'Todo Beer App',
        todos: [],
      };
    },
  };
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }

  .center {
    text-align: left;
    margin: 0 100px;
  }
</style>
