// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import search_vue from '@/components/searchVue';
Vue.config.productionTip = false
Vue.component('item-search', search_vue, {
});
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router:router,
  methods: {
    routClicks: function (a) {
    },
  }
})
