const BaseDAO = require('./BaseDAO');

function DiaryDAO(){
	var dao = new BaseDAO();
	
	/**
	 * 按日志类别
	 * @param {Function} callback	回调函数
	 */
	this.listByCategory = function(callback){
		var sql = 'SELECT dt.diaryTypeId AS diaryTypeId, dt.typeName AS name, COUNT(d.diaryId) AS num FROM t_diarytype dt LEFT JOIN t_diary d ON dt.diaryTypeId=d.typeId GROUP BY dt.typeName, d.typeId';
		dao.query(sql, callback);
	};
	
	/**
	 * 按日志日期
	 * @param {Function} callback	回调函数
	 */
	this.listByMonth = function(callback){
		var sql = "SELECT DATE_FORMAT(releaseDate, '%Y年%m月') AS rd, COUNT(diaryId) AS num FROM t_diary GROUP BY rd ORDER BY releaseDate DESC";
		dao.query(sql, callback);
	};
	
	/**
	 * 获取日志列表
	 * @param {int} start			开始位置
	 * @param {l=int} limit			每页最大记录数
	 * @param {callback} callback	回调函数
	 */
	this.listDiary = function(start, limit, callback){
		//dao.findAll('t_diary', start, limit, callback);
		var sql = 'SELECT * FROM t_diary ORDER BY releaseDate DESC LIMIT ' + start + ', ' + limit;
		dao.query(sql, callback);
	}
	
	/**
	 * 最大页码
	 * @param {l=int} limit			每页最大记录数
	 * @param {callback} callback	回调函数
	 */
	this.maxPages = function(limit, callback){
		var sql = 'SELECT CEIL(COUNT(diaryId)/'+limit+') AS pages FROM t_diary';
		dao.query(sql, callback);
	}
}

module.exports = DiaryDAO;