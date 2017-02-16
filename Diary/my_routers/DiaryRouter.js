/**
 * 处理日记的
 */

const express = require('express');
const router = express.Router();

/**
 * 显示首页主界面
 */
router.get('/new', function(req, res){
	res.render('diary_new', req.data);
});

module.exports = router;