/**
 * Created by Administrator on 2016/12/8.
 */
const mysql = require('mysql');
var pool = mysql.createPool({
    'url': 'localhost',
    'user': 'root',
    'database': 'mydb',
    'connectionLimit': 10
});

pool.getConnection(function (err,conn) {
   if(err) throw err;
   else{
       conn.query('select ename,sal from emp where empno= 7369',function (err,rows,fileds) {
           if (err) throw  err;
           console.log(rows);
           /*释放连接，把连接放回连接池里面*/
           conn.release();
       });
   }
});

