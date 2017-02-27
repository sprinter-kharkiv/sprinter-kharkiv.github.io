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

    // BX Slider
    $('.j-slider').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: true,
        pager: false
    });


    //Floatet label in form action
    $('.form-control').focusout(function() {
        $('.form-group').removeClass('focus');
    });
    $('.form-control').focus(function() {
        $(this).closest('.form-group').addClass('focus');
    });
    $('select.form-control').change(function() {
        $(this).closest('.form-group').addClass('filled');
    });


    /// Input Kepress Filled  Focus
    $('.form-control').keyup(function() {
        if($(this).val().length > 0){
            $(this).closest('.form-group').addClass('filled');
        }

        else{
            $(this).closest('.form-group').removeClass('filled');
        }
    });

    /// Input Check Filled Focus
    var $formControl = $('.form-control');
    var values = {};
    var validate =    $formControl.each(function() {
        if($(this).val().length > 0){
            $(this).closest('.form-group').addClass('filled');
        }
        else{
            $(this).closest('.form-group').removeClass('filled');
        }
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
