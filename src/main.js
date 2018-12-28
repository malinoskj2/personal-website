import Vue from 'vue';
import VueParticles from 'vue-particles';
import VueTyperPlugin from 'vue-typer';

import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(SequentialEntrance);
Vue.use(VueParticles);
Vue.use(VueTyperPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
