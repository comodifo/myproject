<template>
  <div class="app-container">
    <mt-header fixed title="重庆大学出版社"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shoppingCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item"  to="/User">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
		</nav>
  </div>
</template>

<style>
  .app-container{
    padding-top:40px;
    padding-bottom:50px;
  }
  .mui-bar-tab .mui-tab-item.mui-active{
    color:#C61319 !important;
  }
  .mint-header{
    background-color:#C61319 !important;
  }
</style>
