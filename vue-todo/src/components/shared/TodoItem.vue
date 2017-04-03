<template>
  <div>
    <input
      type="checkbox"
      v-model="todo.completed"> 

    <span v-if="!editingItem">
      <span :class="{'strike-through': todo.completed}">{{ todo.todo }}</span>

      <a 
        href="#"
        v-on:click="toggleEdit"> Edit </a>
    </span>

    <span v-if="editingItem">
      <input
        type="input"
        v-model="todo.todo">

      <a 
        href="#"
        v-on:click="toggleEdit"> Save </a>

      <a 
        href="#"
        v-on:click="toggleEdit"> Cancel </a>
    </span>

    <a href="#" v-on:click="deleteItem"> Delete </a>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: {
        type: Object,
        default: {},
      },
    },
    data() {
      return { editingItem: false };
    },
    methods: {
      deleteItem() {
        // alert('Item will soon be deleted');
      },
      toggleEdit() {
        // @todo Added a way to keep state change
        this.editingItem = !this.editingItem;
      },
    },
  };
</script>

<style scopes>
  .strike-through {
    text-decoration: line-through;
  }
</style>
