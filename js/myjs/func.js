$(function(){

// img slider
if( $('.pogoSlider').length != 0 ){
	$('.pogoSlider').pogoSlider({
    	targetWidth: 1800,
    	targetHeight: 1196,
    	pauseOnHover:false,
    });
}

// section-3 固定背景responsive
bg_responsive();
$(window).resize(function(){
	bg_responsive();
});
function bg_responsive(){
	var $width = $(window).width();
	var $height = $(window).height();
	if(  ($width/$height) >= (1280/853) ){
		$('div.section-3').css('backgroundSize','100% auto');
	}else{
		$('div.section-3').css('backgroundSize','auto 100%');
	}
}

// 地图上的文字的动画效果
map_animate();
$(window).on('scroll resize',function(){
	map_animate();
})
function map_animate(){
	if( $('.map-img-wrapper p').eq(0).css('position') != 'static' && $('.map-img-wrapper').length != 0 ){
		if( $(window).scrollTop() >=
		parseInt($('.map-img-wrapper p').eq(0).offset().top-$(window).height()/2)
		&& $(window).scrollTop() <=
		parseInt($('.map-img-wrapper p').eq(0).offset().top-$(window).height()/2+280) ){
			$('.map-img-wrapper p').each(function(){
				$(this).addClass('zoomIn show');
			});
		}else if( $(window).scrollTop() < ($('.map h2').offset().top-$(window).height()) ){
			$('.map-img-wrapper p').each(function(){
				$(this).removeClass('zoomIn show');
			});
		}else if( $(window).scrollTop() > $('.trip-section h2.title').offset().top ){
			$('.map-img-wrapper p').each(function(){
				$(this).removeClass('zoomIn show');
			});
		}
	}
}

// section-2的button的跳转
$('.section-2 .btn-col a').eq(0).click(function(){
	$("html,body").animate({scrollTop: $('.section-3').offset().top},250);
});
$('.section-2 .btn-col a').eq(2).click(function(){
	$("html,body").animate({scrollTop: $('.map').offset().top},700);
});
$('.section-2 .btn-col a').eq(3).click(function(){
	$("html,body").animate({scrollTop: $('.trip-section').offset().top},700);
});















































































});