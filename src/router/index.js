import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/Home.vue'], resolve),
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/Login.vue'], resolve),
      meta: {
        isNavShow: false,
        isCenter: false
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: resolve => require(['@/SignIn.vue'], resolve),
      meta: {
        isNavShow: false,
        isCenter: false
      }
    },
    {
      path: '/AboutASD',
      name: 'AboutASD',
      component: resolve => require(['@/AboutASD.vue'], resolve),
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/News',
      name: 'News',
      component: resolve => require(['@/News'], resolve),
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/SelfTest',
      name: 'SelfTest',
      component: resolve => require(['@/selfTest'], resolve),
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/Games',
      name: 'Games',
      component: resolve => require(['@/Games'], resolve),
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: resolve => require(['@/user/UserCenter'], resolve),
      meta: {
        isNavShow: true,
        isCenter: true
      }
    },
    {
      path: '/RelationDetail',
      name: 'RelationDetail',
      component: resolve => require(['@/user/RelationDetail'], resolve),
      meta: {
        isNavShow: true,
        isCenter: true
      }
    },
    {
      path: '/resetPsw',
      name: 'resetPsw',
      component: resolve => require(['@/user/resetPsw'], resolve),
      meta: {
        isNavShow: true,
        isCenter: true
      }
    }
  ]
})
