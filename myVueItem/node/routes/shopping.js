const express = require ('express');
const pool = require('../pool')
var router=express.Router();
router.get('/list',(req,res)=>{
    var sql="SELECT id,title,cost,xcost,img_url,reper,content,bookId,press,author,date FROM shopping";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/listA',(req,res)=>{
    var $id = req.query.id;
    var sql="SELECT id,title,cost,xcost,img_url,reper,content,bookId,press,author,date FROM shopping WHERE id=?";
    pool.query(sql,[$id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/listCar',(req,res)=>{
    var $id = req.query.id;
    var sql="SELECT id,title,cost,mig_url,counts FROM car WHERE uid=?";
    pool.query(sql,[$id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
router.get('/listAddCar',(req,res)=>{
    var $uid = req.query.id;
    var $title = req.query.title;
    var $mig_url = req.query.img_url;
    var $counts = req.query.counts;
    var $cost = req.query.cost;
    var sql="INSERT INTO car VALUES (NULL,?,?,?,?,?)";
    pool.query(sql,[$mig_url,$title,$cost,$counts,$uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
});
module.exports = router;