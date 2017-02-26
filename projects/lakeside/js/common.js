/**
 * Created by Admin on 25.11.2015.
 */
$(document).ready(function () {

    // Mobile menu
    $('.j-menu-trig').on('click', function () {
        $('.header').toggleClass('vis-menu')
    });
    $('.header_nav').on('click', function () {
        $('.header').removeClass('vis-menu')
    });


    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    // parallax for background
    $(".scroll-bg").each(function () {
        var $bgobj = $(this);

        $(window).scroll(function () {
            var yPos = -($(window).scrollTop() / $bgobj.data("speed"));
            var coords = "50%" + yPos + "px";

            $bgobj.css(
                "background-position", coords);
        })
    });
});
