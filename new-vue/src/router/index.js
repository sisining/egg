import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Create=()=>import('@/views/Create')
const Home=()=>import('@/views/Home')
// const Create=()=>import('@/views/Create')
// const Create=()=>import('@/views/Create')
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/create',
    component:Create
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
