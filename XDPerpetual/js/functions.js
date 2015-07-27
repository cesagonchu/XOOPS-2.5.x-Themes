jQuery(function() {
	
	$('#slider ul.items li').each(function() {
		$('#slider')
	});

	$('#slider ul.items').jcarousel({
		'scroll': 1,
		'auto': 3,
		'wrap': 'both',
        initCallback: mycarousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemVisibleInCallback: {
			onAfterAnimation: function(c, o, i, s) {
				jQuery('#slider .nav li').removeClass('active');
				jQuery('#slider .nav li:eq('+ (i-1) +')').addClass('active');
			}
		}
	});
	
	if ( $.browser.msie && $.browser.version == 6 ) {
		DD_belatedPNG.fix('.btn-more, #header, h1#logo a, .slide-btn, #slider .nav a, #wrapper, #wrapper .inner, #bottom, #slider img, #three-cols img');
	}
});

function mycarousel_initCallback(carousel) {

	var i = 1;
	
	$('#slider .nav').append('<ul></ul>');
	$('#slider .items li').each(function(){
		$('#slider .nav ul').append('<li><a href="#">' + i + '</a></li>');
		i++;
	});
	
	$('#slider .nav').css('margin-left', function(){
		var width = $('#slider .nav').width() / 2;
		return -width + 'px';
	});

    $('#slider .nav a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });

};