const BaseDAO = require('./BaseDAO');

function EmpDAO(){
	var dao = new BaseDAO();
	
	/**
	 * 根据empno查找数据
	 * @param {int} empno			员工号
	 * @param {Function} callback	回调的函数
	 */
	this.findByEmpno = function(empno, callback){
		dao.findBy('emp', {'EMPNO':empno}, callback);
	};
	
	/**
	 * 查找所有员工
	 */
	this.findAll = function(start, limit, callback){
		dao.findAll('emp', callback, start, limit);
	}
	
	/**
	 * @param {JSON} emp		需要保存的empJSON对象
	 */
	this.save = function(emp, callback){
		dao.save(emp, 'emp', callback);
	};
	
	this.delete = function(empno, callback){
		dao.delete({'EMPNO':empno}, 'emp', callback);
	}
	
	this.update = function(emp, callback){
		var where = {'EMPNO':emp.empno==undefined?emp.EMPNO:emp.empno};
		// 删除empno数据
		if (emp.empno){
			delete emp.empno;
		}else {
			delete emp.EMPNO;
		}
		dao.update(emp, 'emp', where,callback)
	};
}

module.exports = EmpDAO;

/*var dao = new EmpDAO();

dao.update({'EMPNO':8100, 'sal':700}, function(){});

dao.findByEmpno(8100, function(err, rows){
	console.log(rows);
});*/
