/*新闻资讯页面*/
<template>
    <div id="MeContent">
            <!--页眉，放置标题-->
            <div class="mui-card-header mui-card-media">
                <img src="../../img/heardsm.png"/>
                <div class="mui-media-body">
                    {{list.title}}
                    <p>发表于 {{parseInt(list.mdate) | datetimeFilter}}</p>
                </div>
            </div>
            <!--内容区-->
            <div class="mui-card-content" max-size>　　{{list.content}}</div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer" @click="go">&lt;&lt;返回</div> 
    </div>
</template>
<script>
import Toast from 'mint-ui'
    export default{
        data(){
            return {
                list:{},
                id: this.$route.params.id
            }
        },
        created() {
            this.getlist();
        },
        methods:{
            getlist(){
                this.$http.get("message/listContent?id="+this.id).then(result=>{
                if(result.body.code==1){
                this.list =result.body.msg[0];}
                else{
                    Toast("数据错误");
                }
              })
            },
            go(){
                history.go(-1);
            }
        }
    }
</script>
<style>
</style>