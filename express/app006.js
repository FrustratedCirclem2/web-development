/**
 * Created by Administrator on 2016/12/13.
 */
const express = require('express');

var app = new express();
app.listen(80,function () {
   console.log('服务器启动成功');
});

/*app.get('/ab?cd',function (req,res,next) {
    res.send('ab?cd');//?重复0或1次前面的一个字符
});*/
/*app.get('/ab+cd',function (req,res,next) {
    res.send('ab+cd');//+重复1或多次前面的一个字符
});*/
/*
app.get('/ab*cd',function (req,res,next) {
    res.send('ab*cd');//!*表示任意多个字符
});
*/
/*app.get('/ab?cd',function (req,res,next) {
    res.send('ab?cd');//?重复0或一次前面的一个字符
});*/
app.get(/a/,function (req,res,next) {
    res.send('/a/');
})

