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

module.exports = router;