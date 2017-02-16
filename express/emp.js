/**
 * Created by Administrator on 2016/12/14.
 */
/*
const express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/',function (req,res) {
   res.send('emp home');
});
router.get('/about',function (req,res) {
    res.send('emp about');
});
router.get('/new',function (req,res) {
    res.send('emp new');
});

module.exports = router;*/
var express = require('express');
var router = express.Router();
var bodyParse = require('body-parser');
var fs = require('fs');
var urlencodedParser = bodyParse.urlencoded({extended:false});
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
});
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
});

router.get('/login',urlencodedParser,function (req,res) {
    fs.readFile('./views/test.html',function (err,data) {
        if (err) throw err;
        res.write(data);
    });

});

router.post('/login1',urlencodedParser,function (req,res) {
    user = req.body.user;console.log(user);
    pass = req.body.pass;console.log(pass);
    res.send(user+','+pass);
});
module.exports = router;