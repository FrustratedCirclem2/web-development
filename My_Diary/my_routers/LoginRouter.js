/**
 * Created by Administrator on 2016/12/14.
 */
var express = require('express');
var router = express.Router();

/**
 * 显示登录页面
 */
router.get('/login', function (req, res) {
    res.render('login');
});
/**
 * 处理用户登录的操作
 *
 */
router.post('/login',function (req,res) {

});
module.exports = router;