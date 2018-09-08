/*返回键引用*/
<template>
    <div id="returnss">
        <div class="returnss" @click="go">&lt;返回</div>  
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods:{
            go(){
                history.go(-1);
            }
        }
    }
</script>
<style>
.returnss{
      width:80px;
      position:relative;
      top:-30px;
      left:10px;
      color:#fff;
      z-index:999;
  }
</style>