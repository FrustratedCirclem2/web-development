(function (){
	var menub = document.getElementsByClassName("menu_box");
	var menu_main = document.getElementsByClassName("menu_main");
	var menu_sub = document.getElementsByClassName("menu_sub");
	
	
	function displayb (i){
		return function (){
		menu_sub[i].style.display = "block";
		menu_main[i].style.border = "2px solid #c9cbce";
		menu_main[i].style.borderRight = "none";
		menu_main[i].style.backgroundColor = "white";
		}
	}
	
	function closeb (i){
 		return function (){
		menu_sub[i].style.display = "none";
		menu_main[i].style.border = "none";
		menu_main[i].style.backgroundColor = "inherit";
		}
	}
	
	for (var i = 0;i< menub.length;i++)
	{
		menub[i].onmouseover = displayb(i);
	}
	
	for (var i = 0;i< menub.length;i++)
	{
		menub[i].onmouseout = closeb(i);
	}
	
/*	menu_main[0].onmouseover = function(){
		menu_sub[0].style.display = "block";
		menu_main[0].style.border = "2px solid #c9cbce";
		menu_main[0].style.borderRight = "none";
		menu_main[0].style.backgroundColor = "white";
		
	}
	
	menu_main[0].onmouseout = function(){
		menu_sub[0].style.display = "none";
		menu_main[0].style.border = "none";
		menu_main[0].style.backgroundColor = "inherit";
	}*/
}) ();
