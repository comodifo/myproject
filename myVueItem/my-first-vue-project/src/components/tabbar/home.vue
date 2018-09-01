<template>
    <div class="home">
        <!--首页轮播图-->
        <carousel></carousel>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Message">
                        <span class="mui-icon mui-icon-eye"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-university"></span>
                        <div class="mui-media-body">大师讲堂</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                        <div class="mui-media-body">图书分类</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
                        <div class="mui-media-body">数字产品</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
                        <div class="mui-media-body">免费</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-prech"></span>
                        <div class="mui-media-body">充值</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-trend"></span>
                        <div class="mui-media-body">热门排行</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                        <div class="mui-media-body">活动</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Forum">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
                        <div class="mui-media-body">读者之声</div></router-link></li>
            </ul> 
        </div>
    </div>  
</template>
<script>
import carousel from '../reusing/Carousel.vue'
    export default{
        data(){
            return {}
        },
        created() {},
        methods:{},
        components:{
            carousel
        }
    }
</script>
<style >
</style>