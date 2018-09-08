/*商品页面*/
<template>
   
    <div id="homeShChild">
     <returnss></returnss>
			<div class="mui-card">
				<div class="mui-card-header mui-card-media" :style="'background-image:url('+list.img_url+')'">
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>上架时间: {{parseInt(list.date) | datetimeFilter}}　作者：{{list.author}}</p>
                        <p>
                            当前售价:<span>{{xcost}}</span> 
                            零售价: <span>{{cost}}</span> 
                            库存: <span>{{list.reper}}</span>
                        </p>
                        <div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="deleteShopping">-</button>
                            <input class="mui-input-numbox" type="number" :value="va"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addShopping">+</button>
				        </div>
                        <button type="button" class="mui-btn mui-btn-primary"> 立即购买 </button>
                        <button type="button" class="mui-btn mui-btn-danger" @click="addStore"> 加入购物车 </button>
						<p style="color: #333;">
                           <span>书号：{{list.bookId}}　出版社：{{list.press}}</span><br><br>
                           {{list.content}}
                        </p>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import returnss from '../reusing/returnss.vue'
    export default{
        data(){
            return {
                id:this.$route.params.id,
                list:{},
                va:0,
                xcost:0,
                cost:0            }
        },
        created() {
            this.setlistA();
        },
        methods:{
            setlistA(){
            this.$http.get("shopping/listA?id="+this.id)
            .then(result=>{
                this.list = result.body.msg[0];
                this.xcost = this.list.xcost.toFixed(2);
                this.cost = this.list.cost.toFixed(2);
            })
            },
            addShopping(){
                this.va++;
            },
            deleteShopping(){
                if(this.va>0){
                    this.va--;
                }
            },
            addStore(){
                this.$store.commit("increment");
                var url = `shopping/listAddCar?id=1&title=${this.list.title}&img_url=${this.list.img_url}&counts=${this.va}&cost=${this.xcost}`
                this.$http.get(url).then(result=>{
                })
            }
        },
        components:{
            returnss
        }
    }
</script>
<style>
   #homeShChild .mui-card-header.mui-card-media {
       height:40vw;
       background-size:contain;
       background-repeat:no-repeat;
    }
    #homeShChild .mui-card-content-inner>p:nth-child(2)>span:first-child{
        color:red;
        font-size:30px;
        font-weight:600;
    }
    #homeShChild .mui-card-content-inner>p:nth-child(2)>span:nth-child(2){
        text-decoration:line-through;
    }
    #homeShChild .mui-card-content-inner>p:nth-child(6){
        margin-top:40px;
    }
    #homeShChild .mui-btn.mui-btn-primary{
        margin-left:5%;
        margin-right:1%;
    }
</style>