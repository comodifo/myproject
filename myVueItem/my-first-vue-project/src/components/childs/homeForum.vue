/*论坛页面*/
<template>
    <div id="homeForum">
        <span>论坛　&gt;</span>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for = "item in list" >
                <a @click="setfid(item.fid)">
                    <img :src="item.img_url" class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                      <span> {{item.NAME}} </span> {{item.title}}
                        <p class='mui-ellipsis'>{{item.content}}</p>
                    </div>
                </a>
            </li>
        </ul>
        <mt-button type="danger" size="large" @click="setTid(1)">发帖</mt-button>
        </mt-popup>
    </div>
</template>
<script>
 import Toast from 'mint-ui'
    export default{
        data(){
            return {
                list:[],
                pno:1,
                popupVisible:[]
            }
        },
        created() {
            this.getcont();
        },
        methods:{
            getcont(){
                this.$http.get("forum/list?pno="+this.pno).then(result=>{
                    if(result.body.code == 1)
                    this.list = this.list.concat(result.body.msg);
                    else    
                    Toast("数据出错")
                })
            },
        setfid(id){
            this.$router.push({name:"FoText",params:{id}})
        },
        setTid(id){
            this.$router.push({name:"FoTXT",params:{id}})
        }
        }
    }
</script>
<style>
    #homeForum .mui-media-body span{
        font-size:12px;
    }
</style>