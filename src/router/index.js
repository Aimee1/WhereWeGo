import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import AdminIndex from '@/pages/admin/AdminIndex'
import FaskClick from 'fastclick'


Vue.use(Router)
FaskClick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:user',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex
    }
  ]
})
