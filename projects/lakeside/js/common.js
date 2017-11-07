/**
 * Created by Admin on 25.11.2015.
 */
$(document).ready(function () {

    $(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });

    // Page Scroll
    $('.j-go-to').click(function () {
        var scroll_el = $(this).attr("href");
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
    });

    // Mobile menu
    $('.j-menu-trig').on('click', function () {
        $('.header').toggleClass('vis-menu')
    });
    $('.top_menu').on('click', function () {
        $('.header').removeClass('vis-menu')
    });

    // BX Slider
    $('.j-slider').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: true,
        pager: false,
        controls: false
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

        else {
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

});

/*
function slackInit(elem) {;
    elem.slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
}


$('.work_mask').on('click', function () {
    var slide = $('.portfolio_slider');
        setTimeout(slackInit(slide), 190);    
    });

    */