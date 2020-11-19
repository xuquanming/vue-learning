import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/Main";
import Login from "../views/Login";
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
import NotFound from "../views/NotFound";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/main',
      component: Main,
      children:[
        {
          path:'/user/profile/:id',
          props:true,
          name:'UserProfile',
          component:UserProfile
        },
        {
          path:'/user/list',
          component: UserList
        }
      ]

    },{
      path: '/login',
      component: Login,//嵌套路由

    },
    {
      path:'/goHome',
      redirect:'/main'
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
