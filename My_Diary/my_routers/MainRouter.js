/**
 * Created by Administrator on 2016/12/14.
 */
var express = require('express');
var router = express.Router();

/**
 * 显示首页主界面
 */
router.get('/main',function (req,res) {
    res.render('main');
});

module.exports = router;