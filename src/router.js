import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import HeroTitle from '@/components/HeroTitle.vue';
import NavButtonRow from '@/components/NavButtonRow.vue';
import ContentWindow from '@/components/ContentWindow.vue';
import ContentWindowB from '@/components/ContentWindowB.vue';
import Particles from '@/components/Particles.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';

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
          path: '/welcome',
          name: 'WelcomeMessage',
          components: {
            a: HeroTitle,
            b: ContentWindow,
            d: NavButtonRow,

          },
        },

        {
          path: '',
          name: 'HomePage',
          components: {
            a: HeroTitle,
            c: UnderConstruction,
            d: NavButtonRow,
          },
        },

      ],
    },
  ],
});
