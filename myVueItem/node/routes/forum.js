const express = require ('express');
const pool = require('../pool')
var router=express.Router();
router.get('/list',(req,res)=>{
    var $pno = req.query.pno;
    var $ll = 10;
    var sql="SELECT fid,NAME,title,content,img_url FROM forum LIMIT ?,?";
    pool.query(sql,[($pno-1)*$ll,$ll],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/listAdd',(req,res)=>{
    var $NAME = req.query.tname;
    var $nid = req.query.nid;
    var $conten = req.query.content;
    var $title=req.query.title;
    var $url = "http://127.0.0.1:4000/img/heardsm.png";
    var sql="INSERT INTO forum VALUES (NULL,?,?,?,?,?)";
    pool.query(sql,[$NAME,$title,$conten,$url,$nid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"发表成功"});
    })
});
router.get('/listsingle',(req,res)=>{
    var $id = req.query.id;
    var sql="SELECT NAME,title,content,img_url FROM forum WHERE fid=?";
    pool.query(sql,[$id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/forumtext',(req,res)=>{
    var $fid =req.query.id;
    var sql="SELECT id,fname,fdeta,content FROM forumtext WHERE fid=?";
    pool.query(sql,[$fid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/foruminsert',(req,res)=>{
    var $fid =req.query.fid;
    var $content = req.query.cont;
    var $fdeta = new Date().getTime();
    var $fname = req.query.fname;
    var sql="INSERT INTO forumtext VALUES (NULL,?,?,?,?)";
    pool.query(sql,[$fname,$fdeta,$content,$fid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"发表成功"});
    })
});
module.exports = router;