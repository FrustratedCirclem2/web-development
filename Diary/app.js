// 第三方模块引用
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

// 引用自定义路由
const loginRouter = require('./my_routers/LoginRouter');
const mainRouter = require('./my_routers/MainRouter');
const diaryRouter = require('./my_routers/DiaryRouter');
const categoryRouter = require('./my_routers/CategoryRouter');
const settingRouter = require('./my_routers/settingRouter');
const midwearRouter = require('./my_routers/MidWearRouter');

const app = express();

// 设置静态资源路径
app.use(express.static('./public'));
// 使用body-parser模块 
app.use(bodyParser.urlencoded({extended:false}));
// 设置express-session
/*
 * secret				保存cookie时的密码
 * cookie				设置session的有效时长，以毫秒为单位
 * saveUninitialized	没有初始化情况下是否保存
 * resave				如果数据没有修改状态下是否重复保存
 */
app.use(expressSession({secret:'tocean', cookie:{maxAge:1200000}, saveUninitialized:true, resave:false}));

// 设置使用的模板
app.set('view engine', 'ejs');
// 设置模板路径
app.set('views', './public/ejs');


/*
 * 路由的处理
 */
app.get('/', function(req, res){
	// 做重定向处理
	// 登录
	// 没有登录
	res.redirect('/login');
});
// 登录处理
app.use('/', loginRouter);


app.use('/*', midwearRouter);
// 主界面处理
app.use('/main', mainRouter);
// 日记处理
app.use('/diary', diaryRouter);
// 分类处理
app.use('/category', categoryRouter);
// 设置处理
app.use('/setting', settingRouter);



app.listen(80, function(){
	console.log('服务器已经启动，正在监听80端口');
});
