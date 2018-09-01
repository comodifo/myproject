<template>
    <div>
        <mt-swipe :auto="4000" id="lun">
            <mt-swipe-item>
              <img src="../../img/1.png" />
            </mt-swipe-item>
            <mt-swipe-item>
               <img src="../../img/2.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
               <img src="../../img/3.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
               <img src="../../img/4.jpg" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{},
        props:["list"]
    }
</script>
<style>
    #lun{
        height:200px;
    }
    #lun img{
        width:100%;
        height:100%;
    }
</style>