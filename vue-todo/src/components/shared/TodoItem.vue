<template>
  <div>
    <input type="checkbox" v-model="todo.completed"> 
    <span :class="{'strike-through': todo.completed}">{{ todo.todo }}</span>
    <a href="#" v-on:click="deleteItem"> Delete </a>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    methods: {
      deleteItem() {
        alert('Item will soon be deleted');
      },
    },
  };
</script>

<style scopes>
  .strike-through {
    text-decoration: line-through;
  }
</style>
