/**
 * 模仿session的操作
 */
const uuid = require('node-uuid');

/**
 * session操作
 */
function session() {
    /**保存不同浏览器的数据*/
    var data = {};

    /**
     * 保存用户数据
     * @param {Object} data 用户需要保存的数据
     * @param {String} sessionId 用户保存数据的唯一码
     */
    this.put = function (data, sessionId) {
        //如果用户没有sessionId则生成sessionId,否则使用原有的sessionId
         sessionId = sessionId
    }
}

module.exports = new Session();