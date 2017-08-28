
var mysql = require('mysql');

const path = require('path')


var express = require('express');
var app = express();
var arr = [];

var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : '123456789',       
    port: '3306',                   
    database: 'test'
  }); 
  connection.connect(function(err) {
    if(err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('connection connect success');
});
connection.query('SELECT * from data',function(err,rows,fields) {
    if(err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('THe result is:', rows);
    for (var i = 0; i < rows.length; i++) {
        arr[i] = rows[i];
    }
    // j =jsonp(rows);
    // j = rows
  })

app.use(express.static(path.join(__dirname, 'public')))
// app.use("/", express.static(__dirname + "/public"));
// app.use("/", express.static(__dirname + "/dist"));
// app.use(express.static(path.join( 'dist')))
// app.use(express.static(path.join(__dirname, 'dist')));

// app.use(express.static('dist'));
// app.use(express.static('files'));

app.get('/', function (req, res) {

});
app.post('/weather', function (req, res) {
    res.json(arr);
    
});

app.listen(3000, function () {
  console.log(' app listening on port 3000!');
});



