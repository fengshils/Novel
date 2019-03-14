import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/pages/Layout'
import Bookshelf from '@/pages/Bookshelf'
import Bookcity from '@/pages/Bookcity'
import Usercenter from '@/pages/Usercenter'
import RankDetail from '@/components/bookcity/RankDetail'
import BookDetail from '@/components/bookdetail/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bookshelf',
      component: Bookshelf
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/bookcity',
      name: 'Bookcity',
      component: Bookcity
    },
    {path: '/usercenter', name: 'Usercenter', component: Usercenter},
    {path: '/rankdetail/:id', name: 'RankdDetail', component: RankDetail},
    {path: '/bookdetail/:id', name: 'BookDetail', component: BookDetail}
  ]
})
