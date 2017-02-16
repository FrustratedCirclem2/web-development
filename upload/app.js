/**
 * Created by Administrator on 2016/12/12.
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');

http.createServer(server).listen(80);

function server(req,res) {
    var pathname = url.parse(req.url).pathname;
    res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
    console.log(pathname);
    if('/upload.action' == pathname){
        /**
         * 1.加载formidable模块
         * 2.创建可以解析上传数据的实例
         * 3.对数据进行解析
         */
        var form = new formidable.IncomingForm();

        //指定上传目录
        form.uploadDir = './upload';

        //保留上传文件的后缀
        form.keepExtensions = true;

        form.parse(req,function (err,fileds,files) {
            if(err) throw err;
            console.log(fileds);
            console.log(files);
            res.end('上传成功');
        })
    }
    else{
        fs.readFile('index.html',function (err,data) {
            if(err) throw err;
            res.end(data);
        });
    }
}