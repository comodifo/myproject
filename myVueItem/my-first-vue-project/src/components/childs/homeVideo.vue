/*视频页面*/
<template>
<div id="Video">
     <div v-for="(item,i) in list" :key="item.id">
       <video controls :poster="item.img" metadata  :src="item.video" @play="hidde(i)" @pause="show(i)">
       </video>
       <span class="mui-icon-extra mui-icon-extra-like" :style="addStyle[i]" @click="add(i)"><span class="mui-badge" :style="zanStyle[i]">{{item.quantity}}</span></span>    
     </div>
     <mt-button type="danger" size="large" @click="setco">加载更多</mt-button>  
</div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                list:[],
                addStyle:[],
                zanStyle:[],
                pno:1
            }
        },
        created() {
            this.getvideo();
        },
        methods:{
            add(a){
                if(this.addStyle[a].color=="red"){
                    this.$set(this.addStyle,a,{color:"#fff",display:"inline-block"});
                    //this.addStyle[a].color="#fff";
                    this.$set(this.zanStyle,a,{display:"none"});
                   // this.zanStyle[a].display="none";
                    this.list[a].quantity--;
                    this.setquantity(this.list[a].id,this.list[a].quantity);
                     Toast("已取消");
                }else{
                    this.$set(this.addStyle,a,{color:"red",display:"inline-block"});
                    // this.addStyle[a].color="red";
                    this.$set(this.zanStyle,a,{display:"inline-block"});
                    // this.zanStyle[a].display="inline-block";
                    this.list[a].quantity++;
                    this.setquantity(this.list[a].id,this.list[a].quantity);
                    Toast("已点赞");
                }
            },
            setquantity(n,m){
                this.$http.get(`video/addlist?id=${n}&quantity=${m}`)
                .then(result=>{
                    if(result.body.code!=1){
                        Toast("网络出错");
                    }
                })
            },
            hidde(i){
                 setTimeout(()=>{this.addStyle[i].display="none"},500)
            },
            show(i){
                  this.addStyle[i].display="inline-block";
            },
            getvideo(){
                this.$http.get("video/list?pno="+this.pno)
                .then(result=>{
                   this.list = this.list.concat(result.body.msg);
                   for(var i = 0; i<result.body.msg.length;i++){
                       this.zanStyle[i] = {display:"none"};
                       this.addStyle[i] = { color:"#fff", display:"inline-block" };
                   };
                })
            },
            setco(){
                this.pno++;
                this.getvideo();
            }
        }
    }
</script>
<style>
    #Video>div>video{
        width:100%;
    }
    #Video>div>span:nth-child(2){
        position:relative;
        top:-56px;
        left:63%;
        font-size:18px;
    }
    .wite{
        color:#fff;
    }
    .red{
        color:red;
    }
    #Video>div>span:nth-child(2)>span{
        position:relative;
        top:-18px;
        left:-7px;
        color:#fff;
        background:red;
    }
</style>