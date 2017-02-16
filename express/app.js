const express = require('express');
var app = express();

/**
 * 中间件是通过use或者method(get,post,put,delete)来调用的
 */
app.listen(80, function () {
    console.log('服务器启动成功，正在监听80端口');
});
//应用级中间件
app.use('/student', function (req, res, next) {
    console.log('第一个中间件');
   next();
});
app.use('/student', function (req, res, next) {
    console.log('第二个中间件');
    next();
});
app.get('/student',function (req, res, nex) {
   res.send('Student Home');
});

