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

    //
    //<p>World population is <span id="world-population">0</span>.</p>

    $(window).scroll(function () {


    });



});