jQuery(document).ready(function(){
	jQuery(".mobileNav ul li > a").click(function(){
		jQuery(this).next("ul").slideToggle(1000);
		return false;
	});
});
