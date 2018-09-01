const express = require('express');
const bodyParser = require('body-parser');
const session =require("express-session");
const user = require('./routes/user.js');
var app = express();
app.listen(3000);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
   secret:'随机字符串',
   cookie:{maxAge:1000*60*30},
   resave:false,
   saveUninitialized:true
}));


app.use(express.static('static'));
app.use('/user',user);
