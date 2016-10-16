import $ from 'jquery'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

window.$ = ${{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.jQuery = ${{#if_eq lintConfig "airbnb"}};{{/if_eq}}
require('bootstrap-loader'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
