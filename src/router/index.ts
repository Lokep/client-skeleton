import { createRouter, createWebHashHistory } from 'vue-router'

import routes from "~pages";

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',

      component: () => import('@/components/Layout/index.vue'),
      children: routes
    },

  ],
})


export default router
