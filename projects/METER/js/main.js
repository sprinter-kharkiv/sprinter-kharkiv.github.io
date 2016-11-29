$(document).ready(function () {

    $('.j-go-to').click(function () {
        var scroll_el = $(this).attr("data-section");
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
    });


    $('.j-catalog').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.j-modal-catalog')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('.j-modal-close, #overlay').click(function () {
        $('.j-modal-catalog, .j-modal-contact')
            .animate({opacity: 0, top: '45%'}, 100,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
    });
});
