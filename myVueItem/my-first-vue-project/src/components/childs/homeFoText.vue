/*帖子页面*/
<template>
    <div id="homeFoText">
       <h1>帖子页面{{id}}</h1>  
       <textarea></textarea>      
    </div>
</template>
<script>
import Toast from 'mint-ui'
    export default{
        data(){
            return {
                id: this.$route.params.id,
                list:[]
            }
        },
        created() {
            this.getcont();
        },
        methods:{
            getcont(){
                this.$http.get("forum/listsingle?id="+this.id).then(result=>{
                    if(result.body.code == 1){
                    this.list = this.list.concat(result.body.msg);
                    console.log(result)}
                    else    
                    Toast("数据出错")
                })
            }
        }
    }
</script>
<style>
    
</style>
