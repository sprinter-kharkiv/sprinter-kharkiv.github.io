$(document).ready(function() {


    $(window).on('scroll', function () {
        var scrTop = $(window).scrollTop();
        var elem = $('#invest_count');
        var value = elem.attr('data-value');
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        // Header Scroll
        if (scrTop >= 5) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
        // counter
        if(scrTop>elem.offset().top - $(window).height() + 50 ) {
            elem.animateNumber(
                {
                    number: value,
                    numberStep: comma_separator_number_step
                },
                1000
            );
        }
    });

$(function () {

        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'single',
            step: 10,
            prefix: "$",
        });

    });



});