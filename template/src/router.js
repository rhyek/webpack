import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  { path: '/', component: { template: '<h1>Hello world!</h1>' } }
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new VueRouter({
  routes,
  mode: 'history'
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}