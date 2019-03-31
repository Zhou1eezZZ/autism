import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home.vue'
import Login from '@/Login.vue'
import SignIn from '@/SignIn.vue'
import AboutASD from '@/AboutASD.vue'
import News from '@/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        isNavShow:true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        isNavShow:false
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn,
      meta:{
        isNavShow:false
      }
    },
    {
      path: '/AboutASD',
      name: 'AboutASD',
      component: AboutASD,
      meta:{
        isNavShow:true
      }
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta:{
        isNavShow:true
      }
    }
  ]
})
