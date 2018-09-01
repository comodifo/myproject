const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
var message = require('./routes/message');
var forum = require('./routes/forum');
var app = express();
app.listen(4000);

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({
      orign:["http://127.0.0.1:8080",
		  "http://localhost:8080"]
		  ,credentials:true
}));

app.use('/message',message);
app.use('/forum',forum);