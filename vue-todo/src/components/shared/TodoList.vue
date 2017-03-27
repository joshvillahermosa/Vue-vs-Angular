<template>
  <div>
    <ul>
      <li v-for="todo in todos">
        <todo-item :todo="todo"></todo-item>
      </li>  
    </ul>
  </div>
</template>

<script>
  /* eslint-disable */
  import TodoItem from '@/components/shared/TodoItem';

  export default {
    name: 'TodoList',
    components: { TodoItem },
    props: {
      todos: Array,
    },
  };
</script>
