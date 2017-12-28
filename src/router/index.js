import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Product from '@/components/Product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/product',
          name:'Product',
          component:Product
        }

      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
