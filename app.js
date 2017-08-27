// var app = require('express')();
// var http = require('http').Server(app);
var mysql = require('mysql');
// var port = 8806;
// console.log('8806')
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
//     // var connection = mysql.createConnection({     
//     //     host     : 'localhost',       
//     //     user     : 'root',              
//     //     password : '123456789',       
//     //     port: '3306',                   
//     //     database: 'test'
//     //   }); 
//     //   connection.connect(function(err) {
//     //     if(err) {
//     //         console.log('[query] - :' + err);
//     //         return;
//     //     }
//     //     console.log('connection connect success');
//     // });
//     // connection.query('SELECT * from data',function(err,rows,fields) {
//     //     if(err) {
//     //         console.log('[query] - :' + err);
//     //         return;
//     //     }
//     //     console.log('THe result is:', rows);
//     //   })
// });



var express = require('express');
var app = express();
var arr = [];
// var j = {};
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


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
    
    
});
app.post('/weather', function (req, res) {
    // res.sendFile(__dirname + '/public/index.html');
    res.json(arr);
    
    
});
 




app.listen(3000, function () {
  console.log(' app listening on port 3000!');
});



