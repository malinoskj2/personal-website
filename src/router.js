import Vue from 'vue';
import Router from 'vue-router';

// Views
const BaseView = () => import('@/views/BaseView.vue');

// Sub-Views
const ProjectTiles = () => import('@/components/ProjectTiles.vue');
const JNav = () => import('@/components/JNav.vue');
const JFooter = () => import('@/components/JFooter.vue');
const IntroText = () => import('@/components/IntroText.vue');


Vue.use(Router);

const root = {
  path: '/',
  component: BaseView,
  children: [
    {
      path: '',
      name: 'home',
      components: {
        nav: JNav,
        'pre-content': IntroText,
        'left-content': ProjectTiles,
        'right-content': ProjectTiles,
        footer: JFooter,
      },
    },
  ],
};

const projects = {
  path: '/projects',
  component: BaseView,

  props: {
    groupTitle: 'Languages',
  },
  children: [
    {
      path: '',
      name: 'projects',
      components: {
        nav: JNav,
        footer: JFooter,
      },
    },
  ],
};

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    root,
    projects,
  ],
});
