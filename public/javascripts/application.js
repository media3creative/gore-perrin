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
		if( parseInt($(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			$(".bg1").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
			$(".bg2").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				$(".bg1").css(
					{"height": "100%"}
					);
				$(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
$(window).resize(function() {
 	var middlePoint = (parseInt($("body").css("width"))/2) - (parseInt($(currentPage).css("width"))/2) + 30 + "px"
	//alert("tutu")
	$(currentPage).css("left",middlePoint)
});