/*帖子页面*/
<template>
    <div id="homeFoText">
       <returnss></returnss>
       <h2>{{list.title}}</h2>
       <p>{{list.content}}</p>
       <hr/>
       <b>评论 &gt;&gt;</b>
       <hr/>
       <div v-for="(item,i) in forum">
          <b>第{{i+1}}楼&nbsp;&nbsp;{{item.fname}} <span>{{parseInt(item.fdeta) | datetimeFilter}}</span></b>
          <br/>&nbsp;&nbsp;<span>{{item.content}}</span>
          <hr/>
       </div>
       <textarea placeholder="请输入评论内容（最多120字）" maxlength="120" v-model="cont"></textarea>
       <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>    
    </div>
</template>
<script>
import returnss from '../reusing/returnss.vue'
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                id: this.$route.params.id,
                list:[],
                forum:[],
                cont:"",
                fname:"丁丁"
            }
        },
        created() {
            this.getcont();
            this.getForumtext();
        },
        methods:{
            getcont(){
                this.$http.get("forum/listsingle?id="+this.id).then(result=>{
                    if(result.body.code == 1)
                    this.list = result.body.msg[0];
                    else    
                    Toast("数据出错")
                })
            },
            getForumtext(){
                this.$http.get("forum/forumtext?id="+this.id).then(result=>{
                    if(result.body.code == 1)
                    this.forum = result.body.msg;
                    else    
                    Toast("数据出错")
                })  
            },
            postcomment(){
                var m = this.cont.trim();
                if(m.length<10){
                    Toast("发表内容过少");
                    return;
                }
                var n = this.id;
                var url = `forum/foruminsert?fid=${n}&cont=${m}&fname=${this.fname}`
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        Toast(result.body.msg[0]);
                        this.cont="";
                         history.go(0);
                    }
                })
            }
        },
        components:{
            returnss
        }
    }
</script>
<style>
    
</style>
