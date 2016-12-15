/**
 * 设置的路由
 */

const express = require('express');
const router = express.Router();

/**
 * 显示首页主界面
 */
router.get('/home', function(req, res){
	res.render('setting', req.data);
});

module.exports = router;