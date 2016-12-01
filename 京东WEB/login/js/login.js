/**
 * New node file
 */
$(document).ready(function(){
	$('#check-label').bind('click',function(event){
		var checked = $(':checkbox')[0].checked;
		if(checked){
			$('#check-icon').css('background-position','0 -85px');
		}
		else{
			$('#check-icon').css('background-position','0 -106px');
		}
	})
	
	$(':button').bind('click',function(){
		 document.forms[0].submit();
	})
});
