const UserDAO = require('../my_modules/UserDAO');

const dao = new UserDAO();

/**
 * 处理登录的
 */
const express = require('express');
const router = express.Router();

/**
 * 显示登录页面
 */
router.get('/login', function(req, res){
	res.render('login', {username:'', password:'', error:''});
});

/**
 * 处理用户登录的操作
 */
router.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	dao.login(username, password, function(err, rows){
		if (err) throw err;
		
		if (rows.length>0){	//获取到用户的数据，登录成功
			var session = req.session;
			session.user = rows[0];
			res.redirect('/main/home');
		}else{
			res.render('login', {username:username, password:password, error:'用户名或密码错误'});
		}
	});
});

module.exports = router;