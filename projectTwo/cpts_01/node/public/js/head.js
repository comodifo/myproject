
    $.ajax({
        url:"http://localhost:3000/head.html",
        type:"get"
    })
        .then(result=>{
            $res=$(result);
            $res.insertBefore("#head>div:first-child");
            //document.getElementById("head").innerHTML=res;
            function isLogin(){
            $.ajax({
                url:"http://localhost:3000/user/islogin",
                type:"get",
                dataType:"json",
                success:function(data){
                    if(data.ok==0){
                        $("#denglu").show().next().hide();
                    }else{
                        $("#denglu").hide().next().show();
                        $("#zhuxiao>span").html(data.name);
                    }
                }
              })
             }
            isLogin();
            $("#denglu").on("click","a",function(e){
                e.preventDefault();
                location.href="http://localhost:3000/register.html?back="+location.href;
            })
            $("#zhuxiao").on("click","a",function(e){
                e.preventDefault();
                $.ajax({
                    url:"http://localhost:3000/user/signout",
                    type:"get",
                    success:isLogin
                })
            })
        })


