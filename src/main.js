import Vue from 'vue';
import Overdrive from 'vue-overdrive';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(Overdrive);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
