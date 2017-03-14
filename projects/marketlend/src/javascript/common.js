$(document).ready(function() {

    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 5) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

});