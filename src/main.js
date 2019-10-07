import Vue from 'vue'
import App from './App.vue'

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './fa.config'; // font-awesome

import './assets/styles/global.scss'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { routes } from './routes.js'
const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  render: function(createElement){
    return createElement(App)
  }
}).$mount('#app')
