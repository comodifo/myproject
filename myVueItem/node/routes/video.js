const express = require ('express');
const pool = require('../pool')
var router=express.Router();
router.get('/list',(req,res)=>{
    var $pno = req.query.pno;
    var $begin = 3;
    var sql = `SELECT id,img,video,quantity FROM video LIMIT ?,?`;
    pool.query(sql,[$begin*($pno-1),$begin],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
})
router.get('/addlist',(req,res)=>{
    var $id = req.query.id;
    var $quantity = req.query.quantity;
    var sql = "UPDATE video SET quantity=? WHERE id=?";
    pool.query(sql,[$quantity,$id],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"ok"});
    })
})
module.exports = router;