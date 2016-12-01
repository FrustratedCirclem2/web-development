(function(){
	var backtop = document.getElementById("backtop");
	var product_fk = document.getElementById("product-fk");
	var logintool_bar = document.getElementsByClassName("logintool_bar")[0];
	var top = document.body.scrollTop;
	
	//alert(parseInt('10',8));
	//alert(Number.POSITIVE_INFINITY);
	window.onscroll = function(){
		top = document.body.scrollTop;
		if(top == 0)
		{
			backtop.style.display = "none";
			
		}
		else if(top >= 1973)
		{
			logintool_bar.style.display = "none";
			product_fk.style.display = "none";
		}
		else
		{
			logintool_bar.style.display = "block";
			product_fk.style.display = "block"
			backtop.style.display = "block";
		}
	};
})();
