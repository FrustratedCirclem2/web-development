/**
 * Created by Administrator on 2016/12/14.
 */
//第三方模块应用
var express = require('express');
//引用自定义路由
var loginRouter = require('./my_routers/LoginRouter');
var mainRouter = require('./my_routers/MainRouter');
var app = express();
//设置静态资源路径
app.use(express.static('public'));
//设置模板路径
app.set('views', 'public/ejs');
app.set('view engine', 'ejs');
app.listen(80, function () {
    console.log('服务器已经启动，正在监听80端口');
});

/**
 * 路由的处理
 */
app.get('/', function (req, res) {
    /**
     *做一个重定向处理，有两种情况
     * 1.登录
     * 2.没有登录
     */
    res.redirect('/login');
});

app.use('/', loginRouter);
app.use('/home',mainRouter);