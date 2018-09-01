const express = require ('express');
const pool = require('../pool')
var router=express.Router();
router.get('/list',(req,res)=>{
    var $pno = req.query.pno;
    if(!$pno) $pno=1;
    var $ll = 10;
    var sql="SELECT fid,NAME,title,content,img_url FROM forum LIMIT ?,?";
    pool.query(sql,[($pno-1)*$ll,$ll],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/listsingle',(req,res)=>{
    var $id = req.query.id;
    if(!$id) res.send({code:-1});
    var sql="SELECT NAME,title,content,img_url FROM forum WHERE fid=?";
    pool.query(sql,[$id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
})

module.exports = router;