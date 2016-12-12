/**
 * 模仿session的操作
 */
const uuid = require('node-uuid');

/**
 * session操作
 */
function Session() {
    /**保存不同浏览器的数据*/
    var data = {};
    /**session可以保持的时长，默认保存20分钟*/
    var lifeTime = 1200000;
    /**定时检查数据是否有超出最大的保存时间*/
    var timer = setTimeout(handleTimmer,lifeTime);

    /**
     * 保存用户数据
     * @param {Object} value 用户需要保存的数据
     * @param {String} sessionId 用户保存数据的唯一码
     */
    this.put = function (value, sessionId) {
        //如果用户没有sessionId则生成sessionId,否则使用原有的sessionId
        if (sessionId == undefined) {
            var sessionId = uuid.v1();
        }
        data[sessionId] = {'data': value,'max-age': new Date().getTime() + lifeTime};
        return 'pid=' + sessionId;
    }

    /**
     * 结束Session
     * @param {String} timmer
     */
    this.destroy = function (timmer) {
        clearTimeout(timmer);
    }

    /**
     * 根据sessionId获取数据
     * @param {Number} sessionId
     */
    this.get = function (sessionId) {
        //判断sessionId是否有效和data里是否有保存过sessionId对应的数据
        if(sessionId == undefined || data[sessionId] == undefined){console.log(1);
            return undefined;
        }

        return data[sessionId]['data'];

    }

    /**
     * 更新sessionId的时长
     * @param {String} sessionId
     */
    this.update = function (sessionId) {
        if(sessionId != undefined && data[sessionId] != undefined){
            var o = data[sessionId];
            data[sessionId] = {'data': o['data'],'max-age': new Date().getTime() +　lifeTime};
        }
    }
    

    function handleTimmer() {
        //1.遍历data
        //2.提取max-age的数据
        //3.和当前的时间比较
        //4.如果小于当前时间，则需要删除

        var current = new Date().getTime();//检查的当前时刻
        for (var key in data){
            var o = data[key];
            var max = o['max-age'];
            if(current >= max){
                delete data[key]; //删除超时数据
            }
        }
        timer = setTimeout(handleTimmer,lifeTime);
    }
}

module.exports = new Session();

/**
 * 测试
 */
var session = new Session();
var cookie = session.put('hello world');
var sessionId = cookie.split('=')[1];
console.log('sessionId = ' + sessionId);
var data = session.get(sessionId);
console.log(data);
