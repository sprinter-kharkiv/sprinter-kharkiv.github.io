$(document).ready(function(){
	$('.j-slider').bxSlider({
	    mode: 'fade',
	    auto: false,
	    autoControls: true,
	    pager: true,
	    adaptiveHeight: true
	});

  // Mobile menu
 	$('#trig').on('click', function() {
 		$('.nav').toggleClass('vis-menu')
 	});


  // Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$('.nav-block-pad').addClass('fixed');
		} else {
			$('.nav-block-pad').removeClass('fixed');
		}
	});

	$(".banner").each(function(){
		var $bgobj = $(this);

		$(window).scroll(function(){
			var yPos = -($(window).scrollTop() /  $bgobj.data("speed"));
			var coords = "50%" + yPos + "px";

			$bgobj.css(
					"background-position" , coords );
		})
	})

});
