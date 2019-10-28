$(function() {
	$(".logo-box").mouseenter(function() {
		$(".logo-2").animate({
			height: "50px"
		})
	}).mouseleave(function() {
		$(".logo-2").stop().animate({
			height: "0px"
		})
	})
	//	点击添加Ativan
	$(".paging ul li").click(function() {
		$(this).addClass("active").siblings().removeClass("active")
	})
	//	banner
	function imgsize() {
		var domwidth = $(window).width();
		var imghight = domwidth * 700 / 2000;
		$(".banner").css("height", imghight + "px")
	}
	imgsize();
	window.onresize = function() {
		imgsize();
	}
	//	回到顶部
	addEventListener("mousewheel", function() {
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll > 400) {
			$(".backtop").css("display", "block")
		} else {
			$(".backtop").css("display", "none")
		}
		//		点击事件
		$(".backtop").click(function() {
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			$(".backtop").css("display", "none");
		})
	})
	//	联系我们
	$(".side").click(function() {
		$(this).stop().animate({
			"right": "0"
		})
	}).mouseleave(function() {
		$(this).stop().animate({
			"right": "-50px"
		})
	})
//	点赞
$(".glyphicon-thumbs-up").click(function() {
	$(this).css("color", "yellow");
})
//转发

$(".glyphicon-share-alt").hover(function() {
	$(".alt").css("display", "block");
	$(".glyphicon-share-alt").mouseleave(function(){
	$(".alt").css("display","none");
})
})
})
