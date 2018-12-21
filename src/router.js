import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import HeroTitle from '@/components/HeroTitle.vue';
import NavButtonRow from '@/components/NavButtonRow.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
import ProjectTiles from '@/components/ProjectTiles.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'HomePage',
          components: {
            'nav-left': HeroTitle,
            'nav-right': NavButtonRow,
            'content-a': UnderConstruction,
          },
        },
        {
          path: '/projects',
          name: 'projects',
          components: {
            'nav-left': HeroTitle,
            'nav-right': NavButtonRow,
            'content-a': ProjectTiles,
          },
        },

      ],
    },
  ],
});
