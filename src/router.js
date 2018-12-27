import Vue from 'vue';
import Router from 'vue-router';

// Views
const BaseView = () => import('@/views/BaseView.vue');

// Sub-Views
const UnderConstruction = () => import('@/components/UnderConstruction.vue');
const ProjectTiles = () => import('@/components/ProjectTiles.vue');
const JNav = () => import('@/components/JNav.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'home',
          components: {
            nav: JNav,
            'content-a': UnderConstruction,
          },
        },
      ],
    },
    {
      path: '/projects',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'projects',
          components: {
            nav: JNav,
            'content-a': ProjectTiles,
          },
        },
      ],
    },
  ],
});
