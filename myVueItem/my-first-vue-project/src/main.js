//main.js  负责加载所有资源(组件,js,css)创建vue实例对象
//1.加载路由模块
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "jquery"
import "popper.js"
import "bootstrap"
import "@/lib/mui/css/bootstrap.css"
//1.1加载模块 VueResource(发送ajax请求)
import VueResource from 'vue-resource'
//1.2：将VueResource 注册vue
Vue.use(VueResource);
//1.2.1设置请求的根路径
Vue.http.options.root="http://127.0.0.1:4000/";

import Vuex from 'vuex'

Vue.use(Vuex);
Vue.filter("datetimeFilter",function(val){
	var date=new Date(val);
    var y=date.getFullYear();
    var m=date.getMonth()+1;
      m<10&&(m="0"+m);
    var d=date.getDate();
        d<10&&(d="0"+d);
    var h=date.getHours();
    h>12&&(h-=12);
    h<10&&(h="0"+h);
    var M=date.getMinutes()
    M<10&&(M="0"+M);
    return `${y}-${m}-${d} ${h}:${M}`; 
})

var store = new Vuex.Store({
    state:{count:0},        //共享值  vue  data
	mutations:{             //  vue methods
	    increment(state){
		   state.count++;
		},
	    subtract(state){
		   state.count--;
		}
	},
	getters:{               //获得  state 的值
	   optCount:function(state){
	      return state.count;
	   }
	}
})
//1.4：按需引入组件header 顶部固定导航栏
//import {Header,Swipe,SwipeItem,Button,Lazyload} from "mint-ui"
//1.5：注册组件
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.component(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)

//1.6：引入 mui css
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import "./lib/mui/fonts/mui.ttf"
import "./lib/mui/fonts/mui-icons-extra.ttf"
//1.7:引入mint-ui 组件所需样式文件
import "mint-ui/lib/style.css"

//2：是否是生产模式false
Vue.config.productionTip = false

//3：创建vue实现对象挂载  public/index.html#app
new Vue({
  router,
  render: h => h(App),store
}).$mount('#app')
