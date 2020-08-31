import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home/home.vue")
const Category = () => import("../views/category/category.vue")
const Cart = () => import("../views/cart/cart.vue")
const Profile = () => import("../views/profile/profile.vue")
const Detail = () => import("../views/detail/detail.vue")
const Subcategory = () => import("../views/category/subcategory.vue")

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
        path:'/category',
        component:Category,
        redirect:'/category/3627',
        children:[
          {
            path:':maitKey',
            component:Subcategory
          }
        ]

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