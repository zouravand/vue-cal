import Vue from 'vue'
import VueRouter from 'vue-router'
import Documentation from '@/documentation/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Documentation
  },
  {
    path: '/test',
    component: () => import('@/documentation/isolated-test-view.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})
