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


    $(".range_summ").asRange({
        keyboard: true,
        tip: true
    });
    // when the value is changed

    $(".range_summ").on('asRange::change', function (e) {
        var summ = $('#summ').val();
        var time = $('#time').val();
        var monthly_repaymant = $('.monthly_repaymant');
        var total_payable = $('.total_payable');
        monthly_repaymant.html(summ);
        total_payable.html(time);
    });




});