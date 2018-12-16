import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Projects = () => import('@/views/Projects');
const Home = () => import('@/views/Home');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      component: Projects,
    },
  ],
});
