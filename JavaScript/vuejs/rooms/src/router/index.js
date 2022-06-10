import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path:'/',
    name:'HomePage',
    component:HomePage
  },
  {
    path:'/search',
    name:'SearchPage',
    component:SearchPage
  }
];

const router = createRouter({
  mode:'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
