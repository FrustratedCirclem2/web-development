/**
 * Created by Administrator on 2016/12/13.
 */
const express = require('express');

var app = new express();
app.listen(80,function () {
   console.log('服务器启动成功');
})
app.get('/',[f1,f2,f3,f4]);

function f1(req,res,next) {
    console.log('f1 running');
    next();
}

function f2(req,res,next) {
    console.log('f2 running');
    next();
}

function f3(req,res,next) {
    console.log('f3 running');
    next();
}

function f4(req,res,next) {
    console.log('f4 running');
    res.send('over');
}