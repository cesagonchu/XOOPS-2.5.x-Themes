$(function() {
	$('.field, textarea').focus(function() {      
        if(this.title==this.value) {
            this.value = '';
        }
    }).blur(function(){
        if(this.value=='') {
            this.value = this.title;
        }
    });

    $("#slider").jcarousel({
        scroll: 1,
        auto: 1,
        vertical: 'true',
        wrap: 'both',       
        initCallback: mycarousel_initCallback,        
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemVisibleInCallback: {
            onAfterAnimation: function(c, o, i, s) {
                $('.slider-nav a').removeClass('active');
                $('.slider-nav a:eq('+ (i-1) +')').addClass('active');
            }
        }        
    });
   
    $('input[type=checkbox]').prettyCheckboxes({
        checkboxWidth: 13,
        checkboxHeight: 14
    });

    if ($.browser.msie && $.browser.version == 6) {
        DD_belatedPNG.fix('#logo a, #main-top, #main-middle, .socials a, #main-bottom, #navigation, #slider img, a.get-started, .slider-nav, .slider-nav a, #footer, .info a, .submit-button, .field-holder, span.holder');
    }


});

function mycarousel_initCallback(carousel) {
    $('.slider-nav a').bind('click', function() {      
    	$('.slider-nav a').removeClass('active');
    	$(this).addClass('active');	     		      
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));    
        return false;
    });
} 