import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home.vue'
import Login from '@/Login.vue'
import SignIn from '@/SignIn.vue'
import AboutASD from '@/AboutASD.vue'
import News from '@/News'
import SelfTest from '@/selfTest'
import Games from '@/Games'
import UserCenter from '@/user/UserCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        isNavShow: false,
        isCenter: false
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn,
      meta: {
        isNavShow: false,
        isCenter: false
      }
    },
    {
      path: '/AboutASD',
      name: 'AboutASD',
      component: AboutASD,
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/SelfTest',
      name: 'SelfTest',
      component: SelfTest,
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/Games',
      name: 'Games',
      component: Games,
      meta: {
        isNavShow: true,
        isCenter: false
      }
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        isNavShow: true,
        isCenter: true
      }
    }
  ]
})
