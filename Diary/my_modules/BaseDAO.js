/**
 * 完成基本数据库的操作
 * DAO - Data Access Object
 */

const mysql = require('mysql');

/**
 * 提供基本数据库操作
 */
function BaseDAO(){
	/**
	 * 数据库连接池
	 * "dateStrings":"data"		格式化输出日期，date, time, timestamp
	 */
	var pool = mysql.createPool({
		"url":"localhost",
		"user":"root",
		"password":"",
		"database":"db_diary",
		"connectionLimit":10,
		"dateStrings":"date"
	});
	
	/**
	 * 保存数据的操作
	 * @param {String} table		需要操作的表
	 * @param {JSON} obj			需要保存的数据，数据以{"列名":"值 "}的方式保存
	 * @param {Function} callback	执行回操作后回调用户需要执行的代码
	 */
	this.save = function(table, obj, callback){
		pool.getConnection(function(err, conn){
			if (err) throw err;
			
			var cols = '';		//需要添加到的字段
			var values = '';	//添加的内容
			for (var key in obj){
				cols += key + ', ';
				values += conn.escape(obj[key]) + ', ';
			}
			if (cols.endsWith(', ')){
				cols = cols.substr(0, cols.length-2);
			}
			if (values.endsWith(', ')){
				values = values.substr(0, values.length-2);
			}
			var sql = 'INSERT INTO ' + table + '(' + cols + ') VALUES(' + values + ')';
			conn.query(sql, function(err){
				conn.release();
				if (err) err;
				if (callback != undefined){
					callback(err);
				}
			})
		});
	};
	
	/**
	 * 根据id删队记录
	 * @param {String} table		需要操作的表
	 * @param {JSON} obj			需要删除数据的id，数据以{"列名":"值"}的方式提交
	 * @param {Function} callback	执行回操作后回调用户需要执行的代码
	 */
	this.delete = function(table, obj, callback){
		pool.getConnection(function(err, conn){
			if (err) throw err;
			
			var sql = 'DELETE FROM ' + table;
			var where = '';
			for (var key in obj){
				where += key + '=' + conn.escape(obj[key]) + ', ';
			}
			if (where.endsWith(', ')){
				where = where.substr(0, where.length-2);
			}
			if (where.length > 0){
				sql += ' WHERE ' + where;
				conn.query(sql, function(err){
					if (err) throw err;
					if (callback != undefined){
						callback(err);
					}
					conn.release();
				});
			}else {
				conn.release();
				if (callback != undefined){
					callback('请提供删除条件');
				}
			}
		});
	};
	
	/**
	 * 更新数据
	 * @param {String} table		需要操作的表
	 * @param {JSON} obj			需要更新除数据的内容，数据以{"列名":"值"}的方式提交
	 * @param {JSON} where			筛选符合条件，数据以{"列名":"值"}的方式提交
	 * @param {Function} callback	执行回操作后回调用户需要执行的代码
	 */
	this.update = function(table, obj, where, callback){
		pool.getConnection(function(err, conn){
			if (err) throw err;
			
			var sql = 'UPDATE ' + table + ' SET ';
			for (var key in obj){
				sql += key + '=' + conn.escape(obj[key]) + ', ';
			}
			if (sql.endsWith(', ')){
				sql = sql.substr(0, sql.length-2);
			}
			var clause = '';
			for (var key in where){
				clause += key + '=' + conn.escape(where[key]) + ' AND ';
			}
			if (clause.endsWith(' AND ')){
				clause = clause.substr(0, clause.length-5);
			}
			if (clause.length > 0){
				sql += ' WHERE ' + clause;
			}
			conn.query(sql, function(err){
				conn.release();
				if (err) throw err;
				if (callback != undefined){
					callback(err);
				}
			});
		});
	};
	
	/**
	 * 根据参数查找记录
	 * @param {String} table		需要操作的表
	 * @param {JSON} where			筛选符合条件，数据以{"列名":"值"}的方式提交 
	 * @param {Function} callback	执行回操作后回调用户需要执行的代码
	 */
	this.findBy = function(table, where, callback){
		pool.getConnection(function(err, conn){
			if (err) throw err;
			var sql = 'SELECT * FROM ' + table;
			if (where != undefined){
				var clause = '';	//拼接where语句
				for (var key in where){
					clause += ' ' + key + '=' + conn.escape(where[key]) + ' AND';
				}
				if(clause.endsWith(' AND')){
					clause = clause.substr(0, clause.length-4);
				}
				if (clause.length > 0){
					sql += ' WHERE' + clause;
				}
			}
			conn.query(sql, function(err, rows){
				conn.release();
				if (err) throw err;
				if (callback != undefined){
					callback(err, rows);
				}
			});
		});
	}
	/**
	 * 查找数据
	 * @param {String} table		查找的表名
	 * @param {int} start			从第几条记录开始查找
	 * @param {int} limit			获取多少条记录
	 * @param {Function} callback	执行回操作后回调用户需要执行的代码
	 */
	this.findAll = function(table, start, limit, callback){
		pool.getConnection(function(err, conn){
			if (err) throw err;
			
			var sql = 'SELECT * FROM ' + table;
			if (start != undefined && limit != undefined){
				sql += ' LIMIT ' + start + ', ' + limit;
			}
			conn.query(sql, function(err, rows){
				conn.release();
				if (err) throw err;
				if (callback != undefined){
					callback(err, rows);
				}
			});
		});
		
	}
	/**
	 * 执行用户自己的SQL语句
	 * @param {String} sql			需要操作的sql
	 * @param {Function} callback	执行回操作后回调用户需要执行的代码
	 */
	this.query = function(sql, callback){
		pool.getConnection(function(err, conn){
			conn.query(sql, function(err, rows){
				conn.release();
				if (callback != undefined){
					callback(err, rows);
				}
			})
		});
	}
}

module.exports = BaseDAO;

// var dao = new BaseDAO();
/*dao.findBy('emp', {empno:'7399'}, function(err, rows){
	console.log(rows);
});*/
/*dao.findAll('emp', function(err, rows){
	console.log(rows);
}, 1, 5);*/

/*dao.save(
	{'EMPNO':7717,
	'ENAME':'MICHAEL',
	'JOB':'CLERK',
	'MGR':7934,
	'HIREDATE':'1988-08-12',
	'SAL':750,
	'COMM':0,
	'DEPTNO':10}, 'emp', function(err){
		if (!err){
			console.log('保存成功')
		}else{
			console.log('失败');
		}
	});*/
	
/*dao.delete({empno:7717}, 'emp', function(err){
	if (err == null){
		console.log('删除成功');
	}else {
		console.log('删除失败');
	}
});*/

/*dao.update({sal:1500, comm:100}, 'emp', {empno:7934}, function(err){
	if (err == null){
		console.log('更新成功');
	}else{
		console.log('失败');
	}
});*/