/**
 * 中间件路由
 */

const express = require('express');
const router = express.Router();

const DiaryDAO = require('../my_modules/DiaryDAO');
const diaryDao = new DiaryDAO();

/**
 * 显示首页主界面
 */
router.get('/*', function(req, res, next){
	if (req.session.user != undefined){
		next();
	}else{
		res.redirect('/login');
	}
}, function(req, res, next){
	var user = req.session.user;
	// 设置用户的头像，昵称，心情到request
	req.data = {"imageName":user.imageName, "nickName":user.nickName, "userSign":user.mood};
	next();
}, function(req, res, next){
	diaryDao.listByCategory(function(err, rows){
		if(err) throw err;
		req.data['byCategory'] = rows;
		diaryDao.listByMonth(function(err, rows){
			if(err) throw err;
			req.data['byMonth'] = rows;
			next();
		});
	});
});

module.exports = router;