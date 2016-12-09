var mysql = require('mysql');

var pool = mysql.createPool({
	"url":"localhost",
	"user":"root",
	"password":"",
	"database":"scott",
	"port":3306,
	"connectionLimit":10
});

pool.getConnection(function(err, conn){
	if (err) throw err;
	else {
		conn.query('SELECT * FROM emp WHERE empno=7369', function(err, row){
			if (err) throw err;
			else{
				console.log(row);
				// 释放连接，把连接放回到连接池里
				conn.release();
			}
		});
		
	}
});
