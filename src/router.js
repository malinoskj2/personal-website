import Vue from 'vue';
import Router from 'vue-router';

import Projects from '@/views/Projects.vue';
import Home from '@/views/Home.vue';
import HeroTitle from '@/components/HeroTitle.vue';
import NavButtonRow from '@/components/NavButtonRow.vue';
import ContentWindow from '@/components/ContentWindow.vue';
import Particles from '@/components/Particles.vue';

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
            c: NavButtonRow,
          },
        },

        {
          path: '/content',
          name: 'ContentHomeView',
          components: {
            a: HeroTitle,
            b: ContentWindow,
            c: NavButtonRow,
            background: Particles,
          },
        },

        {
          path: '/projects',
          name: 'MainReversed',
          components: {
            a: Projects,
          },
        },

      ],
    },
  ],
});
