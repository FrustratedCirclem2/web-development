/**
 * New node file
 */


var slider = new Object();
	slider.imgs = ["upload/lol1.jpg","upload/lol2.jpg","upload/lol3.jpg","upload/lol4.jpg"];
	slider.labels = ["first test","Second test","Third test","Fourth test"];

var listview = new Object();
	listview.title = ["First test","Second test"];
	listview.describe = ["first test","second test"];
	listview.note = ["first nodejs test","second nodejs test"];
	listview.icon = ["upload/lol1.jpg","upload/lol2.jpg"];
	listview.id = [1,2];
	
var contentType = {
	'html':'text/html',
	'css':'text/css',
	'jpg':'image/jpeg'
}
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

http.createServer(function(req,res){
	var reqObject = url.parse(req.url,true);
	var path = reqObject.pathname;
	
	if(/*path.endWith('.html')*/false){
		load(reqObject,'public/html' + path,res);
		return;
	}
	else if(/*path.endWith('.css')||path.endWith('.js')*/false){
		load(reqObject,'public' + path,res);
	}
	else if(path == '/checkName'){
		
		parseParams(req,querystring.stringify(reqObject.query),function(data){
			var msg;
			res.writeHeader(200,{'Content-Type':contentType.html})
			if(data.name == 'jack'){
				msg = 'fail';
			}
			else{
				msg = 'ok';
			}
			
			res.end("{msg:\"" + msg + "\"}");
			
		});
	}
	else if(path == '/loadMenu'){
		parseParams(req,querystring.stringify(reqObject.query),function(data){
		var str = '';
		if(data.pid == undefined && data.did == undefined && data.cid == undefined){
			var prpovinces = db.province;
			str += concatMenu(provinces);
		}
		else if(data.pid != undefined){
			var cities = db.city[data.pid];
			str += concatMenu(cities);
		}
		else if(data.cid != undefined){
			
			var districts = db.district[data.cid];
			str += concatMenu(districts);
		}
		
		str += ']';
		res.writeHeader(200,{'Content-Type':contentType.html})
			
			
		res.end(str);
		});
	}
	else if(path == '/checkAppcan'){
		console.log('checkAppcan!')
			res.writeHeader(200,{'Content-Type':contentType.html});
			var data = '[';
			for(var i = 0;i < slider.imgs.length;i++){
				data += '{"img":"'+slider.imgs[i]+'",'+'"label":"'+slider.labels[i]+'"},';
			}
			data = data.substring(0,data.length-1)+']';
			
			res.end(data);
			
		
	}
	
	else if(path.endWith('.jpg')){
		console.log('uploading: '+path.substring(1));
		
			fs.readFile('public/img'+path,function(err,data) {
				var content;
				if(!err){
					
					content = data;
					res.writeHeader(200,{'Content-Type':contentType.jpeg});
					
				}
				else{
					content = 'img not found!';
					
					res.writeHeader(200,{'Content-Type':contentType.html});
				}
				res.end(content);
				
			});			
		
	}
	
	else if(path == '/checkListView'){
		console.log('checkListView!')
		res.writeHeader(200,{'Content-Type':contentType.html});
			var data = '[';
			for(var i = 0;i < listview.icon.length;i++){
				data += '{"title":"'+listview.title[i]+'",'+'"describe":"'+listview.describe[i]+'",'+'"note":"'+listview.note[i]+'",'+'"icon":"'+listview.icon[i]+'",'+'"id":"'+listview.id[i]+'"},';
			}
			data = data.substring(0,data.length-1)+']';
			
			res.end(data);
	}
}



).listen(8090);

console.log('服务器启动成功');

function load(obj,path,res){
	fs.readFile(path,function(error,data){
		var content;
		if(!error){
			content = data;
		}
		else{
			content = '404 page not found';
		}
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
		res.write(content);
		res.end();
	});
};

function parseParams(req,urlParams,callback){
	var data = '';
	
	req.addListener('data',function(chunk){
		
		data += chunk;
	});
	
	req.addListener('end',function(){
		if(urlParams != undefined || urlParams == null || data == ''){
			if(data == ''){
				data = urlParams;
			}
			else{
				data += '&' + urlParams;
			}
		}
		
		
		callback(querystring.parse(data));
	});
}

function concatMenu(menu){
	var str = '';
	if(menu){
	var o = menu[0];
	str += '[{"id":"' + o.id + '","name":"' + o.name + '"}';
	for(var i = 1;i < menu.length;i++){
		o = menu[i];
		str += ',{"id":"' + o.id + '","name":"' + o.name + '"}';
	}
	return str;
	}
}
var db = {"province":[{"id":1001,"name":"北京"},{"id":1002,"name":"上海"},{"id":1003,"name":"广东"}],
"city":{"1001":[{"id":10011,"name":"北京1"},{"id":10012,"name":"北京2"}],"1002":[{"id":10011,"name":"上海1"},{"id":10012,"name":"上海2"}]},
"district":{"10011":[{"id":100011,"name":"西区"},{"id":100012,"name":"北区"}],"10012":[{"id":100011,"name":"西区1"},{"id":100012,"name":"北区2"}]}};

String.prototype.endWith=function(str){
  if(str==null||str==""||this.length==0||str.length>this.length)
     return false;
  if(this.substring(this.length-str.length)==str)
     return true;
  else
     return false;
  return true;
 }
 String.prototype.startWith=function(str){
  if(str==null||str==""||this.length==0||str.length>this.length)
   return false;
  if(this.substr(0,str.length)==str)
     return true;
  else
     return false;
  return true;
 }
 
 