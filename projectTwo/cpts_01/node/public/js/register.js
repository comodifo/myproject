$(function(){
 $("#dd").click(function(){
    var uname = $("#exampleInputEmail1").val();
    var upwd = $("#exampleInputPassword1").val();
    $.ajax({
        url:"http://localhost:3000/user/register",
        type:"get",
        data:{uname,upwd},
        dataType:"json",
        success: function(data) {
            if(data.ok==1){
                alert("登录成功");
                if(location.search.indexOf("back=")!==-1){
                    var back=location.search.slice(6);
                    location.href = back;
                }else{
                    location.href="http://localhost:3000/index.html"
                }
            }
            else{ alert("用户名或密码错误")}
        }
    })
  })
})
