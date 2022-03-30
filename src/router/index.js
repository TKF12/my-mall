import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Categories from '@/views/Categories.vue';
import Commoditycart from '@/views/Commoditycart.vue';
import Search from '@/views/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: 'Categories',
    children: [
      {
        path: 'categories',
        name: 'Categories',
        component: Categories,
      },
      {
        path: 'commoditycart',
        name: 'Commoditycart',
        component: Commoditycart,
      },
    ],
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '*',
    redirect: '/home/categories',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
