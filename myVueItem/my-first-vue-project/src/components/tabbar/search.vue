/*搜索页面*/
<template>
    <div id="search"> 
        <div id="search_ss">
        <table></table> 
           <span class="mui-icon mui-icon-search"></span>
           <div>
              <input type="search" placeholder="搜索" @keyup.enter="sou">
           </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value:""
            }
        },
        methods:{
            sou(){
                    console.log("ok");
            }
        }
    }
</script>
<style>
    #search input[type='search']{
        position:relative;
        width:100%;
        height:100%;
        background-color:#fff;
    }
    #search_ss{
        width:100%;
        height:50px;
        background:#D9D9D9;
    }
    #search_ss div{
        width:80%;
        height:60%;
        margin:0 auto; 
        margin-top:10px;
        display:inline-block;
    }
    #search_ss div input{
        width:100%;
        height:100%;
        border-radius:7px;
        padding:10px;
    }
    #search_ss span{
         width:7%;
         margin-left:10px;
    }
</style>
