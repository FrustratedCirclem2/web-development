
$(document).ready(function(){
	$(window).bind('scroll',function(event){
		var $hb = $('#hb');
		var sTop = document.body.scrollTop;
		if (sTop == 0) {
			$hb.css({background:'none',opacity:'1'});
		}
		else if(sTop > 0 && sTop < 75){
			$hb.css({background:'#c91523',opacity:0.10});
		}
		else if(sTop > 75 && sTop < 150){
			$hb.css({background:'#c91523',opacity:0.25});
		}
		else if(sTop > 150 && sTop < 225){
			$hb.css({background:'#c91523',opacity:0.50});
		}
		else if(sTop > 225 && sTop < 250){
			$hb.css({background:'#c91523',opacity:0.70});
		}
		else if(sTop > 250 && sTop < 285){
			$hb.css({background:'#c91523',opacity:0.75});
		}
		else if(sTop > 285){
			$hb.css({background:'#c91523',opacity:0.85});
		}

	});

	var $main = $('#main');
	var $header = $('#header');
	var $search = $('#header :input');
	$header.css('width','' + $main.css('width'));

	window.addEventListener('resize',function(){
		$header.css('width','' + $main.css('width'));

	});

});
