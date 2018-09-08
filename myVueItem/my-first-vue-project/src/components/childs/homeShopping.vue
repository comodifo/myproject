/*商品页面*/
<template>
    <div id="homeshopping">
        <div class="mui-card" v-for="item in list" :key="item.id" @click="setChild(item.id)">
            <!--内容区-->
            <div class="mui-card-content">
               <img :src="item.img_url">
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer">
               <h4>{{item.title}}</h4>
               <span>￥{{item.xcost.toFixed(2)}}</span>　<span>库存: {{item.reper}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[]
            }
        },
        created() {
            this.getlist();
        },
        methods:{
            getlist(){
                this.$http.get("shopping/list")
                .then(result=>{
                    if(result.body.code == 1){
                       this.list = this.list.concat(result.body.msg);
                    }
                })
            },
            setChild(id){
                this.$router.push({name:"ShChild",params:{id}})
            }
        }
    }
</script>
<style>
    #homeshopping .mui-card img{
        width:50%;
        height:140px;
    }
    #homeshopping .mui-card .mui-card-content{
        text-align: center;
    }
    #homeshopping .mui-card-footer{
        color:black;
    }
    #homeshopping .mui-card-footer>h4{
        width:55%;
        height:17px;
        overflow:hidden;
    }
     #homeshopping .mui-card-footer>span:nth-child(2){
        color:red;
        font-weight:600;
        font-size:18px;
    }
</style>