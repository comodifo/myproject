const express=require("express");
const pool=require('../pool.js');
var app=express();
var router = express.Router();
router.get('/register',(req,res)=>{
      var $name=req.query.uname;
		var $pwd=req.query.upwd;
      if ($name==null){ res.send({code: 401,msg: 'uname required'})}
	  if ($pwd==null){ res.send({code: 401,msg: 'uname required'})}
	  var sql=`select * from denglu where name=? and pwd=?`;
	  pool.query(sql,[$name,$pwd],(err,result)=>{
		   if(result.length>0){
			    req.session.lid=result[0].id;
					res.send({ok:1,name:result[0].name});
		   }else{
			  	res.send({ok:0});
			}
	  });
});
router.get("/islogin",(req,res)=>{
	if(req.session.lid==null){
	  res.send({ok:0});}
	else{
	  var sql="select * from denglu where id=?";
	  pool.query(sql,[req.session.lid],(err,result)=>{
		res.send({ok:1,name:result[0].name});
	  })
	}
  })
router.get("/signout",(req,res)=>{
	delete req.session.lid;
	res.send();
  })
module.exports = router;