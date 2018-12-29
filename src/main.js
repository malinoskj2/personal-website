import Vue from 'vue';

// plugins
import VueTyperPlugin from 'vue-typer';
import SequentialEntrance from 'vue-sequential-entrance';
import ScrollView from 'vue-scrollview';

// css
import 'vue-sequential-entrance/vue-sequential-entrance.css';

// vue stuff
import App from './App.vue';
import router from './router';
import store from './store';

// use components from plugins
Vue.use(VueTyperPlugin);
Vue.use(SequentialEntrance);
Vue.use(ScrollView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
