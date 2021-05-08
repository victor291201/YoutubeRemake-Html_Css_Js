
$(".icon-menu").on("click",function(){ 
	$("#menu-d").toggleClass("menu-d");
	$("#barra-m").toggleClass("barra-m");
});
$(".icon-like").on("click",function(){ 
	$("#like").toggleClass("like");
	$("#dislike").removeClass("dislike");
});
$(".icon-dislike").on("click",function(){ 
	$("#dislike").toggleClass("dislike");
	$("#like").removeClass("like");

});
$("#subscribete").on("click",function(){ 
	$("#subscribete").toggleClass("subscribete");
});