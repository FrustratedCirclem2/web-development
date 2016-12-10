/**
 * Created by Administrator on 2016/12/8.
 */
const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring =  require('querystring');

http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    
    if(pathname.endsWith('.html')||pathname.endsWith('.js')) load(pathname,response);
    else if(pathname == '/query') query(response);
}).listen(8090);


function sql_print(content) {
    var length = content.length;
    var i = 0;
    var str = '';
    for(;i < length;i++){
       str += content[i];
    }
    console.log(str);
}

function load(pathname,response) {
    pathname = pathname.slice(1);
    fs.readFile(pathname,function (err,data) {
        if(err) throw err;
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.end(data);
    })
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function query(response) {
    const mysql = require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'mydb'
    });

    connection.connect();
    /*connection.query('select * from emp',function (err,rows,fields) {
     if(err) throw err;
     var length = rows.length;
     var i = 0;
     var str = '';
     for(;i < length;i++){
     str += JSON.stringify(rows[i]) + '/n';
     console.log(str);
     }
     console.log(fields);
     response.writeHead(200,{'Content-Type': 'text/html'});
     response.end(str);

     });*/
    /*connection.query('insert into emp(empno,ename) values(8000,"charlie")',function (err,rows,fields) {
        if(err) throw err;

    });*/
    /*connection.query('delete from emp where empno = 8000');*/
    /*connection.query('update emp set sal = 0 where upper(ename)= "KING"',function (err) {
        if (err) throw err;
        console.log('emp表更新成功');
    })*/
    connection.end();
}