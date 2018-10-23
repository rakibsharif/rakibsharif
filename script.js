jQuery(document).ready(function(){
	jQuery(".bar i").click(function(){
		jQuery(".mobilemenu").slideToggle().css({'display' : 'block'});
		jQuery(".main-page").css({'display' : 'none'});
		return false;
	});
	jQuery(".mobileNavBorder > .bar i").click(function(){
		jQuery(".main-page").css({'display' : 'block'});
		return false;
	});
	jQuery(window).scroll(function(){
		var menushow = jQuery(window).scrollTop();
		if(menushow > 10){
			jQuery(".menu-logo").addClass(".hdt-nav2").css({'transform' : 'rotateX(360deg)', 'transition' : 'all 1s ease-in-out'});
		}
		else{
			jQuery(".menu-logo").removeClass(".hdt-nav2").css({'transform' : 'inherit', 'transition' : 'all 1s ease-in-out'});
		}
	});
	jQuery(window).scroll(function(){
		var menushow = jQuery(window).scrollTop();
		if(menushow > 10){
			jQuery(".row-fixed").addClass(".row-fixed-bac").css({'transform' : 'rotateX(360deg)', 'transition' : 'all 1s ease-in-out'});
		}
		else{
			jQuery(".row-fixed").removeClass(".row-fixed-bac").css({'transform' : 'inherit', 'transition' : 'all 1s ease-in-out'});
		}
	});

});
