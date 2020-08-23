import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home/home.vue")
const Navigation = () => import("../views/nav/navi.vue")
const Cart = () => import("../views/cart/cart.vue")
const Profile = () => import("../views/profile/profile.vue")
const Detail = () => import("../views/detail/detail.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home' 
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/navigation',
        component:Navigation
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
      path:'/detail/:iid',
      component:Detail
  }
  ],
  mode:'history'
})