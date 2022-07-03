import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "../views/SignupView.vue"
import LoginView from "../views/LoginView.vue"
import LogoutView from "../views/LogoutView.vue"
import HerosIndex from "../views/HerosIndex.vue"
import HerosNew from "../views/HerosNew.vue"
import HerosShow from "../views/HerosShow.vue"
import HerosEdit from "../views/HerosEdit.vue"



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { 
    path: "/signup", 
    name: "signup", 
    component: SignupView 
  },
  { 
    path: "/login", 
    name: "login", 
    component: LoginView 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: LogoutView 
  },
  { 
    path: "/heroes", 
    name: "heros index", 
    component: HerosIndex 
  },
  { 
    path: "/heroes/new", 
    name: "heros new", 
    component: HerosNew 
  },
  { 
    path: "/heroes/:id", 
    name: "heros show", 
    component: HerosShow 
  },
  { 
    path: "/heroes/:id/edit", 
    name: "heros edit", 
    component: HerosEdit 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
