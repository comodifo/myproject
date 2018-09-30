//使用mysql，往数据库中插入部门表
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var app = express();
var server = app.listen(3000);
//连接池连接mysql
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'jd',
  connectionLimit: 10
});

//托管静态资源
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//
app.post('/add', (req,res)=>{
  console.log(req.body);
  var obj = req.body;
  //把数据插入到mysql数据库
  pool.query('INSERT INTO dept SET ?',obj,(err,result)=>{
    console.log(result);
	res.send('数据添加成功');
  });
});










