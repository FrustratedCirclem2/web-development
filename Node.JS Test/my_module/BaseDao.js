/**
 * 完成基本数据库的操作
 * Created by Administrator on 2016/12/8.
 **/
const mysql = require('mysql');

/**
 * 提供基本数据库操作
 * @constructor
 */
function BaseDao() {
    /**
     * 数据库连接池
     * */
    var pool = mysql.createPool({
        'url': 'localhost',
        'user': 'root',
        'database': 'mydb',
        'connectionLimit': 10
    });

    /**
     * 保存数据的操作
     * @param {JSON} obj 需要保存的数据,数据以{'列名': '值'}的方式保存
     * @param {String} table 需要操作的表
     * @param {function} callback 执行完操作后回调用户需要执行的代码
     */
    this.save = function (obj,table,callback) {

    };
    /**
     * 根据id删除记录
     * @param {JSON} obj 需要删除的数据,数据以{'列名': '值'}的方式保存
     * @param {String} table 需要操作的表
     * @param {function} callback 执行完操作后回调用户需要执行的代码
     */
    this.delete = function (obj,table,callback) {
        pool.getConnection(function (err,conn) {
            if (err) throw err;
            var sql = 'delete from ' + table;
            var condition = '';
            for(var key in obj){
                condition += key + '=' + conn.escape(obj[key]) + ', ';
            }
            if(condition.endsWith(', ')){
                condition.substr(0,condition.length - 2);
            }
            if(condition.length > 0){
                sql += ' where ' + condition;
                conn.query(sql,function (err,) {
                    
                })
            }
            conn.release();
        })
    };
    /**
     * 更新数据
     * @param {JSON} obj 需要更新的数据,数据以{'列名': '值'}的方式保存
     * @param {String} table 需要操作的表
     * @param {JSON} condition 筛选符合的条件,数据以{'列名': '值'}的方式保存
     * @param {function} callback 执行完操作后回调用户需要执行的代码
     */
    this.update = function (obj,table,condition,callback) {

    };
    /**
     * 根据参数查找数据
     * @param {String} table 需要操作的表
     * @param {JSON} condition 筛选符合的条件,数据以{'列名': '值'}的方式保存
     * @param {function} callback 执行完操作后回调用户需要执行的代码
     */
    this.findBy = function (table,condition,callback) {
        pool.getConnection(function (err,conn) {
            if(err) throw err;
            var sql = 'select * from ' + table + ' ';
            if(condition != undefined){
                var str = '';
                for(var key in condition){
                    str += key + '=' + conn.escape(condition[key])  + ' and ';
                }
                if(str.endsWith('and ')){
                    str = str.substr(0,str.length-5);
                }
                if(str.length > 0){
                    sql += 'where ' + str;
                }
                console.log(sql);
                conn.query(sql,function (err,rows) {
                    if(err) throw err;
                    console.log(rows);
                })
            }
            conn.release();
        });
    };
    /**
     * 根据参数查找数据
     * @param {int} start 从第几天记录开始查找
     * @param {int} limit 获取多少条记录
     * @param {function} callback 执行完操作后回调用户需要执行的代码
     */
    this.findAll = function (table,callback) {
        
    }
    /**
     *执行用户自己的SQL语句
     * @param {String} sql 要执行的SQL语句
     * @param {function} callback 执行完操作后回调用户需要执行的代码
     */
    this.query = function (sql,callback) {

    }
}
var bd = new BaseDao();
// bd.findBy('emp',{'ename': 'SMITH','sal': 800},function (){});