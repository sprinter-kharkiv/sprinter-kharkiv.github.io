$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});

	/* mobile menu*/
    $('.header-menu-trigger').on('click', function () {
        $(this).toggleClass('vis-menu');
        $('.header_nav').toggleClass('vis-mobile');
        return false;
    });
	/* catalog menu*/
    $('.j-catalog').on('click', function () {
    	var parent = $(this).parent();
        $(parent).toggleClass('vis-catalog');
        $('.has_submenu').each(function(){
            $('.has_submenu').removeClass('vis-submenu');
		});

        return false;
    });

	/* catalog SUBmenu*/
    $('.has_submenu').on('click', function () {
        $(this).toggleClass('vis-submenu');
        console.log('555')
        return false;
    });




	/* components */


    if($('.banner_slider').length) {
        $('.banner_slider').slick({
            dots: true,
            speed: 300,
			responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false
                    }
                }
			]
        });
    }
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



