import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Home from '@/views/Home.vue'  //@表示src
import BignewsCom from '@/views/Bignews'
import VideoCom from '@/components/Video'
import TextCom from '@/components/Text'

import NavCom from '@/components/Nav'
import AsideCom from '@/components/Aside'

import Page404 from '@/views/Page404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: Home
    components: {
      nav: NavCom,
      aside: AsideCom,
      default: Home
    }
  },
  {
    //重定向
    path: '/a',
    //redirect: '/about'

    // redirect: {name: 'Bignews', params: 123456}

    redirect: (to) => {
      console.log(to);
      //return '/about'
      if (to.query.go == 'about') {
        return {name:'About'}
      }
      return {name:'News', params: {id:123}}
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/me",
    name: "Me",
    component: () => import('../views/Me.vue'),
    alias: '/my', //别名
  },
  {
    path: '/news/:id',
    name: 'News',
    //props传参
    //props: true,
    props: (route) => ({
      id: route.params.id,
      username: route.query.username
    }),
    component: () => import('../views/News.vue')
  },
  {
    path: '/weather/:city',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/bignews/:content',
    name: 'Bignews',
    component: BignewsCom,
    children: [
      {
        path: 'video',
        component: VideoCom,
      },
      {
        path: 'text',
        component: TextCom,
      }
    ]
  },
  {
    path: '*',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
