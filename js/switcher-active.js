/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
 $(document).ready(function(){
 $('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-260px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'left':'0'});
		}
	});
});