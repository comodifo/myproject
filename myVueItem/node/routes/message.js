const express = require ('express');
const pool = require('../pool')
var router=express.Router();
router.get('/list',(req,res)=>{
    var sql="SELECT id,title,content,mdate,img_url FROM message";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/listContent',(req,res)=>{
    var $id = req.query.id;
    if($id) res.send({code:-1});
    var sql="SELECT id,title,content,mdate,img_url FROM message WHERE id=?";
    pool.query(sql,[$id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
module.exports = router;