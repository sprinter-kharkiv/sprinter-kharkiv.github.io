
$(document).ready(function(){
	
	/* Mobile menu */
	$('.j-trigger').on('click', function(event) {
        event.preventDefault();
		$('.header-nav').toggleClass('vis-menu');
	});


	/* Contact form */
    $('.j-contact').click(function (event) {
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function () {
                $('.j-modal-contact')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('.j-modal-close, .j-overlay').click(function () {
        $('.j-modal-contact')
            .animate({opacity: 0, top: '45%'}, 100,
                function () {
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(200);
                }
            );
    });

});
