const BaseDAO = require('./BaseDAO');

function UserDAO(){
	var dao = new BaseDAO();
	
	/**
	 * 用户登录
	 * @param {String} user				用户名
	 * @param {String} pass				密码
	 * @param {Function} callback		回调函数
*/
this.login = function(user, pass, callback){
    var sql = "SELECT userId, userName, nickName, imageName, mood FROM t_user WHERE userName='"+user+"' AND password="+pass;
    dao.query(sql, callback);
}
}

module.exports = UserDAO;