{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const initializers = require.context('./initializers', true, /\.js$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
initializers.keys().forEach(initializers){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
