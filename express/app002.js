/**
 * Created by Administrator on 2016/12/13.
 */
const express = require('express');
var app = new express();
app.set('view engine','ejs');

app.use(express.static('./public'));

app.listen(80,function () {
    console.log('服务器已经启动,正在监听80端口');
});

app.get('/',function (req,res) {
    res.render('example1',{});
});
app.get('/emp',function (req,res) {
    res.send('emp get')
});
app.post('/emp',function (req,res) {
    res.send('emp post')
});
app.put('/emp',function (req,res) {
    res.send('emp put')
});
app.delete('/emp',function (req,res) {
    res.send('emp delete')
});