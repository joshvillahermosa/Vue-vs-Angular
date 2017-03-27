import Vue from 'vue';
import Router from 'vue-router';
import TodoView from '@/components/TodoView';
// import TodoHttpService from '../services/HttpServices';

// const todoTest = new TodoHttpService();

// todoTest.get('todo').then(data => console.log(data.body));

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoView',
      component: TodoView,
    },
  ],
});
