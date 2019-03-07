import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './components/Search.vue'
import MyFoodList from './components/MyFoodList.vue'
import Log from './views/Log.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:logId',
      name: 'details',
      component: Log
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
