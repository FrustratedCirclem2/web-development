(function (){
	var atext = document.getElementsByClassName("TEXT");
	var ahint = document.getElementsByClassName("hint");
	var form1 = document.forms[0];
	var btn = document.getElementById("btn");
///*	/*atext[0].onfocus = function (){
//		atext[0].style.border = "1px #00B38A solid";
//		ahint[0].style.display = "none";
//	}
//
//
//	
//	atext[1].onfocus = function (){
//		atext[1].style.border = "1px #00B38A solid";
//		ahint[1].style.display = "none";
//	}*/
////	*/
	function focusf(a,b){
		return function(){
			a.style.border = "1px #00B38A solid";
			b.style.display = "none";
			a.value = "";
		}
		
	}
	
	atext[0].onfocus = focusf(atext[0],ahint[0]);
	atext[1].onfocus = focusf(atext[1],ahint[1]);
	function checkusername(){
		
		var REGPH = /^1(3|4|5|7|8)\d{9}$/;
		var REGML = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!(REGPH.test(atext[0].value) || REGML.test(atext[0].value)))
		{
			atext[0].style.border = "1px red solid";
			ahint[0].style.display = "inline-block";
			return false;
		}
			atext[0].style.border = "none";
			return true;
	}
	
	function checkpwd(){

		if(atext[1].value === "" || atext[1].value.length < 6 || atext[1].value.length > 16)
		{
			atext[1].style.border = "1px red solid";
			ahint[1].style.display = "inline-block";
			return false;
		}

			atext[1].style.border = "none";
			return true;
	}
	
	function checksubmit(){
		var c1 = checkusername();
		var c2 = checkpwd();
		if(c1 && c2)
		{
			form1.submit();
		}
		return false;
	}
	
	atext[0].onblur = checkusername; 
	atext[1].onblur = checkpwd; 
	btn.onclick = checksubmit;
	//alert(form1.onSubmit);
	//alert(checksubmit());

})();
