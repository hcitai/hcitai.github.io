import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  { path: '/Contact', name: 'Contact', component: () => import('../views/Contact.vue') },
  { path: '/Join', name: 'join', component: () => import('../views/Join.vue') },
  { path: '/Profile', name: 'Profile', component: () => import('../views/Profile.vue') },
  { path: '/Introduction', name: 'Introduction', component: () => import('../views/Introduction.vue') },
  { path: '/News', name: 'News', component: () => import('../views/News.vue') },
  { path: '/ceshi', name: 'ceshi', component: () => import('../views/ceshi2.vue') },
  //Introduction
]

const router = new VueRouter({
  routes
})

export default router
