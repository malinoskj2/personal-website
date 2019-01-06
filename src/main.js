import Vue from 'vue';

// plugins
import VueTyperPlugin from 'vue-typer';
import SequentialEntrance from 'vue-sequential-entrance';

// css
import 'vue-sequential-entrance/vue-sequential-entrance.css';

// vue stuff
import App from './App.vue';
import store from './store';
import router from './router';

// use components from plugins
Vue.use(VueTyperPlugin);
Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

store.dispatch('initApi')
  .then((res) => {
    console.log('initialized api successfully');
    return store.dispatch('initProjects');
  })
  .catch(err => console.log('failed to intialize api'))
  .then((res) => {
    console.log('initialized projects successfully');
    console.log('starting application');

    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  })
  .catch(err => console.log('failed to intialize projects'));
