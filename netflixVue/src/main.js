import Vue from 'vue'
//import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Home from './paginas/Home.vue'
const Contato = { template: '<p>Página de Contato</p>' }
const SemPagina = { template: '<p>Essa página não existe</p>' }

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')
