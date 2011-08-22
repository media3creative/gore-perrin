var whichPic = 1;
var currentPage = "#page0"
var bg_1_pic = "bg_1.jpg"
var bg_2_pic = "bg_1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));

function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt($("window").css("height")))
		//alert(window.orientation)
	
			$(".bg1, .bg2").css(
				{"height": parseInt($(".content").css("height"))+ 600 +"px"}
				);
	
	};
}
$(window).resize(function() {
 	var middlePoint = (parseInt($("body").css("width"))/2) - (parseInt($(currentPage).css("width"))/2) + 30 + "px"
	//alert("tutu")
	$(currentPage).css("left",middlePoint)
});

$(document).ready(function () {
	alert("tutu")
}