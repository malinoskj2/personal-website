import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const About = () => import('@/views/About');
const Home = () => import('@/views/Home');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
});
