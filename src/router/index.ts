import {
  createRouter,
  Router,
  RouteRecordRaw,
  createWebHistory
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
