/*写文章页面*/
<template>
    <div id="homeFoTXT">
       <h1>写文章页面</h1>
       <h2>题目：</h2>
       <input type="text" v-model="title"/>
       <h3>内容：</h3>
       <textarea placeholder="最多输入120字" maxlength="120" v-model="cont"></textarea>
       <mt-button type="danger" size="large" @click="setcont">发表</mt-button>    
    </div>
</template>
<script>
 import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                nid:this.$route.params.id,
                tname:"bingbing",
                cont:"",
                title:""
            }
        },
        created() {
            console.log(this.$route.params.id);
        },
        methods:{
            setcont(){
                var url=`forum/listAdd?title=${this.title}&nid=${this.nid}&tname=${this.tname}&content=${this.cont}`;
                this.$http.get(url).then(result=>{
                    if(result.body.code == 1){
                    Toast(result.body.msg);
                    setTimeout(()=>{
                        return location = "http://localhost:8080/#/home/Forum"
                        },1000)
                    }
                    else    
                    Toast("数据出错")
                })
            }
        }
    }
</script>
<style>
   #homeFoTXT textarea{
       height:280px;
   }
</style>