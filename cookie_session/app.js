/**
 * Created by FrustratedCirclem2 on 2016/12/11.
 */

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (request, response) {
    pathname = url.parse(request.url).pathname;
    var cookie = request.headers.cookie;
    if (pathname != '/favicon.ico') {
        console.log(cookie);
        response.setHeader('Set-Cookie','username=jack;Max-Age=3600');
        response.writeHeader(200, {'Content-Type': 'text/html;charset=utf-8'});
        response.end('<h1>hello client</h1>');
    }
    else {
        response.writeHeader(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.readFile('./favicon.ico', function (err, data) {
                if (err) throw(err);
                response.end(data);
            }
        )
    }
}).listen(80);