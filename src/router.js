import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/app',
      // name: 'App',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      children: [
        {
          path: 'event/:type/:id',
          name: 'DisplayEvent',
          component: () => import(/* webpackChunkName: "hh" */'./views/DisplayEvent.vue')
        },
        {
          path: 'create',
          name: 'CreateEvent',
          component: () => import(/* webpackChunkName: "hh" */'./views/CreateEvent.vue')
        },
        {
          path: 'myself',
          name: 'MyEvent',
          component: () => import(/* webpackChunkName: "hh" */'./views/MyEvent.vue')
        },
        {
          path: '',
          name: 'Dashboard',
          component: () => import(/* webpackChunkName: "hh" */'./views/Dashboard.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component:  () => import(/* webpackChunkName: "hh" */'./views/NotFound.vue')
    },
  ]
})
