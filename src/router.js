import Vue from 'vue';
import Router from 'vue-router';

import Projects from '@/views/Projects.vue';
import Home from '@/views/Home.vue';
import HeroTitle from '@/components/HeroTitle.vue';
import NavButtonRow from '@/components/NavButtonRow.vue';

Vue.use(Router);


// Component

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [

        {
          path: '',
          name: 'MainHomeView',
          components: {
            a: HeroTitle,
            b: NavButtonRow,
          },
        },

      ],
    },
    {
      path: '/projects',
      component: Projects,
    },
  ],
});
