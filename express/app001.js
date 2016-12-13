/**
 * Created by Administrator on 2016/12/13.
 */
const express = require('express');
var app = new express();
app.set('view engine','ejs');

app.use('/resourses',express.static('./public'));

app.listen(80,function () {
    console.log('服务器已经启动,正在监听80端口');
});



//处理get方式的请求
app.get('/',function (req,res) {
   res.send('hello express!');
});

app.get('/emp/list',function (req,res) {
    res.send('emp list');
});

app.get('/ejs',function (req,res) {
    res.render('index',{title: 'Express标题'});
});