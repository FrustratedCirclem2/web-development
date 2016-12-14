const express = require('express');
const emp = require('./emp');

var app = express();
app.use('/emp',emp);
app.listen(80,function () {
    console.log('服务器启动成功，正在监听80端口');
});