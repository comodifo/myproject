import Vue from 'vue'
import Router from 'vue-router'
//1.1:加载Home组件
import home from './components/tabbar/home.vue'
import search from './components/tabbar/search.vue'
import shoppingCar from './components/tabbar/shoppingCar.vue'
import User from './components/tabbar/User.vue'
import Message from './components/childs/homeMessage.vue'
import MeContent from './components/childs/homeMeContent.vue'
import Forum from './components/childs/homeForum.vue'
import FoText from './components/childs/homeFoText.vue'
import FoTXT from './components/childs/homeFoTXT.vue'
import Video from './components/childs/homeVideo.vue'
import Ranking from './components/childs/homeRanking.vue'
import Shopping from './components/childs/homeShopping.vue'
import ShChild from './components/childs/homeShChild.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      //path 组件访问路由
      //如果访问/home a  <router-link to="/home">...
      path:'/',component:home},
      {path:'/search',component:search},
    {path:'/shoppingCar',component:shoppingCar},  
    {path:'/User',component:User},
    {path:'/home/Message',component:Message},
    {path:'/home/Message/MeContent/:id',component:MeContent,name:"MeContent"},
    {path:'/home/Forum',component:Forum},
    {path:'/home/FoText/:id',component:FoText,name:"FoText"},
    {path:'/home/FoTXT/:id',component:FoTXT,name:"FoTXT"},
    {path:'/home/Video',component:Video},
    {path:'/home/Ranking',component:Ranking},
    {path:'/home/Shopping',component:Shopping},
    {path:'/home/Shopping/ShChild/:id',component:ShChild,name:"ShChild"}
  ]
})
