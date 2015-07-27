$(function() {
    
		    
	$('#slider ul.slider-items').jcarousel({
		'scroll': 1,
		'auto': 3,
		'wrap': 'both',
        initCallback: mycarousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemVisibleInCallback: {
			onAfterAnimation: function(c, o, i, s) {
				jQuery('.slider-nav li').removeClass('active');
				jQuery('.slider-nav li:eq('+ (i-1) +')').addClass('active');
			}
		}
	});
	
	$('.widget .button').hover(function(){
		$(this).addClass('button-act');
	}, function(){
		$(this).removeClass('button-act');
	});
	
	if ($.browser.msie && $.browser.version == 6) {
		DD_belatedPNG.fix('#header, h1#logo a, li.back, li.back .left, #slider, .frame, ul.slider-items li h2, .slider-nav, .nav-inner, #main-top, #main-bot, #main-cnt, .side-outer, .side-bottom, .side-inner, .widget h2, #slider .button, #slider .button span, .comment, .post-info, .separator');
	}
});

function mycarousel_initCallback(carousel) {
    $('.slider-nav .nav-inner').append('<ul></ul>');
    var i = 1;
    $('.slider-items li').each(function(){
    	$('.slider-nav ul').append('<li><a href="#">' + i + '</a></li>');
    	i++;
    });
    $('.slider-nav .nav-inner').append('<div class="cl">&nbsp;</div>');
    $('.slider-nav li:last').addClass('last');
    $('.slider-nav a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });
	$('.slider-nav').css('margin-top', function(){
		return -($(this).find('.nav-inner').outerHeight() / 2 + 7) + 'px';
	});
};