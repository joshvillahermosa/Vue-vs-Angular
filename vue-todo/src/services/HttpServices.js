/**
 * Vue Http Services
 */
import Vue from 'vue';

import * as VueResource from 'vue-resource';

export default class TodoHttpService {
  constructor() {
    Vue.use(VueResource);
    this.http = Vue.http;
    this.root = 'http://localhost:3100/api/';
  }

  get = (resource) => {
    const promise = this.http.get(`${this.root}${resource}`);
    return promise;
  }

  post = (resource, item) => {
    const promise = this.http.post(`${this.root}${resource}`, item);
    return promise;
  }
}
