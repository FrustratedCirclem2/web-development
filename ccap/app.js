/**
 * Created by Administrator on 2016/12/12.
 */
const http = require('http');
const ccap = require('ccap');
const url = require('url');
http.createServer(server).listen(80);

/*var occap = new ccap();*/
var occap = ccap({
    width: 100,
    height: 50,
    fontsize: 30,
    offset: 20
});

function server(req, res) {
    /**
     * 1.引用ccap模块
     * 2.使用get方法获取验证码的文本和图片
     */
    var pathname = url.parse(req.url).pathname;
    if ('/favicon.ico' != pathname) {
        var ary = occap.get();
        var txt = ary[0];
        var buf = ary[1];
        res.end(buf);
        console.log(txt);
    }

}