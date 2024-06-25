import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardComp from '../components/CardComp.vue'
import FriendsView from '@/views/FriendsView.vue'
import ConsolesView from '@/views/ConsolesView.vue'
import CarsView from '@/views/CarsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'CardComp',
    component: CardComp
  },
  {
    path: '/',
    name: 'Friends',
    component: FriendsView
  },
  {
    path: '/',
    name: 'Console',
    component: ConsolesView
  },
  {
    path: '/',
    name: 'Cars',
    component: CarsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
