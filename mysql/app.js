var mysql = require('mysql');

// 打开数据库连接
var conn = mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":"",
	"database":"scott",
	"port":3306
});

//console.log(conn);
// 数据库的查找
/*conn.query('SELECT * FROM emp', function(err, rows, fields){
	if (err) throw err;
	
	console.log('===================rows======================');
	console.log(rows);
	console.log('===================fields======================');
	console.log(fields);
});*/

// 数据的添加
/*conn.query("INSERT INTO emp VALUES(7310, 'JACKSON', 'CLERK', 7902, '1988-12-09', 988, NULL, 20)", function(err){
	if (err) throw err;
	console.log('数据添加成功');
});*/

// 数据库的删除
/*conn.query('DELETE FROM emp WHERE empno=7310', function(err){
	if (err) throw err;
	else console.log('删除记录成功');
});*/

// 数据的更新
/*conn.query("UPDATE emp SET JOB='MANAGER', MGR=7839 WHERE empno=7934", function(err){
	if (err) throw err;
	else console.log('更新数据成功');
});*/


// SQL注入
var username = 'jay';
var password = '123';
var password2 = "' OR '1'='1";

var sql = "SELECT * FROM user WHERE username='"+username+"' AND password='"+password+"'";
var sql2 = "SELECT * FROM user WHERE username='"+username+"' AND password='"+password2+"'";
var sql3 = "SELECT * FROM user WHERE username="+conn.escape(username)+" AND password="+conn.escape(password2);

console.log(sql);
console.log(sql2);
console.log(sql3);



// 关闭数据库连接
conn.end();
