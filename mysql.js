// var mysql = require('mysql');
// var connection = mysql.createConnection({     
//     host     : 'localhost',       
//     user     : 'root',              
//     password : '123456789',       
//     port: '3306',                   
//     database: 'test'
//   }); 
//   connection.connect(function(err) {
//       if(err) {
//           console.log('[query] - :' + err);
//           return;
//       }
//       console.log('connection connect success');
//   });

//   connection.query('SELECT * from data',function(err,rows,fields) {
//     if(err) {
//         console.log('[query] - :' + err);
//         return;
//     }
//     console.log('THe result is:', rows);
//   })












  connection.end(function(err) {
      if(err) {
          console.log(err.toString())
          return;
      }
      console.log('connection end success')
  })