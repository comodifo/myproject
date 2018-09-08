/*新闻资讯页面*/
<template>
    <div id="Message">
        <div class="mui-card"  v-for="item in list" :key="item.id">
            <!--页眉，放置标题-->
            <div class="mui-card-header mui-card-media">
                <img src="../../img/heardsm.png"/>
                <div class="mui-media-body">
                    {{item.title}}
                    <p>发表于 {{parseInt(item.mdate) | datetimeFilter}}</p>
                </div>
            </div>
            <!--内容区-->
            <div class="mui-card-content" max-size>　　{{item.content}}</div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer" @click="setID(item.id)">点击查看详情</div>
        </div>   
    </div>
</template>
<script>
import Toast from 'mint-ui'
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
                this.$http.get("message/list").then(result=>{
                if(result.body.code==1)
                this.list =this.list.concat(result.body.msg);
                else{
                    Toast("数据错误");
                }
              })
            },
            setID(id){
                this.$router.push({name:'MeContent',params:{id}});
            }
        }
    }
</script>
<style>
    #Message .mui-card-content{
        height:106px;
        overflow:hidden;
    }
</style>