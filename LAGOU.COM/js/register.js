(function(){
	var atext = document.getElementsByClassName("TEXT");
	var ahint = document.getElementsByClassName("hint");
	var form1 = document.forms[0];
	var btn = document.getElementById("btn");
	var checkcontainer = document.getElementsByClassName("checkcontainer_active")[0];
	var checkbox1 = document.getElementById("checkb");
	
	checkbox1.onclick = function(){
		if(checkbox1.checked)
		{
			checkcontainer.className = "checkcontainer_active";
		}
		else
		{
			checkcontainer.className = "checkcontainer_normal";
		}
	}
	
	
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
		
		
		var REGML = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!(REGML.test(atext[0].value)))
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
		
	}
	
	atext[0].onblur = checkusername; 
	atext[1].onblur = checkpwd; 
	btn.onclick = checksubmit;
	
})();
