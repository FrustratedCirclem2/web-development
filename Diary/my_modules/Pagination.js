/**
 * 分页导航
 */
function Pagination(){
	/**
	 * 显示分页导航
	 * @param {String} url			URL地址，如/main/home?page=
	 * @param {int} currentPage		当前页
	 * @param {int} totalPage		总页码
	 * @param {Function} callback
	 */
	this.show = function(url, currentPage, totalPage, callback){
		var s = '<li><a href="'+url+'1">首页</a></li>';
		if(currentPage==1){
			s += '<li class="disabled"><a href="#">上一页</a></li>';
		}else{
			s += '<li><a href="'+url+(currentPage-1)+'">上一页</a></li>';
		}
		for(var i=currentPage-2;i<=currentPage+2;i++){
			if(i<1||i>totalPage){
				continue;
			}
			if(i==currentPage){
				s += '<li class="active"><a href="#">'+i+'</a></li>';
			}else{
				s += '<li><a href="'+url+i+'">'+i+'</a></li>';
			}
		}
		if(currentPage==totalPage){
			s += '<li class="disabled"><a href="#">下一页</a></li>';
		}else{
			s += '<li><a href="'+url+(parseInt(currentPage)+1)+'">下一页</a></li>';
		}
		s += '<li><a href="'+url+totalPage+'">尾页</a></li>';
		callback(s);
	}

}

module.exports = Pagination;