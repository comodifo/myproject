
     $.ajax({
         url:"http://localhost:3000/foot.html",
         type:"get",
         success:res=>{
             document.getElementById("foot").innerHTML=res;
         }
     });