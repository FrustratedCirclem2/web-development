/**
 * Created by Administrator on 2016/12/13.
 */
const express = require('express');

var app = new express();
app.listen(80,function () {
   console.log('服务器启动成功');
});


app.get('/download',function (req,res) {
   res.download('favicon.ico'); //res.download()下载文件
});
app.get('/json',function (req,res) {
   res.json({name:　'bili',age: 12});//传输json数据
});

