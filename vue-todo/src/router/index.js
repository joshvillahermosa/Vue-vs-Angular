import Vue from 'vue';
import Router from 'vue-router';
import TodoView from '@/components/TodoView';

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
