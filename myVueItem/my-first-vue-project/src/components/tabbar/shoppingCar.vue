/*购物车页面*/
<template>
    <div id="shoppingCar">
       <div class="mui-card" >
        <div class="mui-card-content" v-for="item in list" :key="item.id">
            <div class="mui-card-content-inner" >
                <img :src="item.mig_url"/>
                <b>{{item.title}}</b><br>
                <b>￥{{item.cost.toFixed(2)}}</b>
                <div class="mui-numbox">
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartDelete(item.id)">-</button>
                    <input class="mui-input-numbox" type="number" :value="item.counts"/>
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd(item.id)">+</button>
                </div>
            </div>
        </div>
        <div class="mui-card-footer">合计：￥{{count.toFixed(2)}}</div>
	  </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                id:1,
                list:[]
            }
        },
        created() {
            this.setData();
        },
        methods:{
            setData(){
                this.$http.get("shopping/listCar?id="+this.id)
                .then(result=>{
                    this.list = result.body.msg;
                })
            },
            cartAdd(id){
                for(var item of this.list){
                    if(item.id == id){
                        item.counts++;
                    }
                }
            },
            cartDelete(id){
                for(var item of this.list){
                    if(item.id == id && item.counts>0){
                        item.counts--;
                    }
                }
            }
        },
        computed:{
            count:function(){
                var mm = 0 ;
                for(var item of this.list){
                    mm +=item.counts*item.cost;
                }
                return mm;
            }
        }
    }
</script>
<style>
    #shoppingCar .mui-card-content-inner>img{
       height:50px;
    } 
    #shoppingCar .mui-card-content-inner>b:nth-child(4){
       font-weight:600;
       font-size:16px;
       color:red;
       margin-left:36%;
       margin-right:7%;
    } 
    #shoppingCar .mui-card-footer{
        font-size:20px;
        font-weight:600;
        color:red;
        margin-left:45%;
    }
</style>