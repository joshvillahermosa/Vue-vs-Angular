<template>
  <div class="center">
    <h1>{{ listTitle }}</h1>

    <add-todo></add-todo>

    <h2>{{ addTitle }}</h2>

    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
  /* eslint-disable */
  import TodoList from '@/components/shared/TodoList';
  import AddTodo from '@/components/shared/AddTodo';
  import TodoHttpService from '../services/HttpServices';

  const todoApi = new TodoHttpService();

  /**
   * For the love of god this needs to get refactored. Sorry.
   */
  export default {
    name: 'TodoView',
    components: { TodoList, AddTodo },
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
        listTitle: 'Todo Beer App',
        addTitle: 'Add Some things todo with Alcohol',
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
