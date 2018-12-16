import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Views
const Projects = () => import('@/views/Projects');
const Home = () => import('@/views/Home');

// Components
const HeroTitle = () => import('@/components/HeroTitle');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'HeroTitle',
          component: HeroTitle,
        },
      ],
    },
    {
      path: '/projects',
      component: Projects,
    },
  ],
});
