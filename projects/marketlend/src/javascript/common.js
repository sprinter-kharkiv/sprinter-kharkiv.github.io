$(document).ready(function () {


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
        if (scrTop > elem.offset().top - $(window).height() + 50) {
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
        var limit = $('#summ').val(),
            term = $('#time').val(),
            monthly_repaymant = $('.monthly_repaymant'),
            total_payable = $('.total_payable'),
            invoice_value = 50000,
            risk_band_interest_rate = 1.3 / 100,
            facility_fee = 0.42 / 100,

            monthly_repaymant_sum = (invoice_value * risk_band_interest_rate) + (limit - invoice_value) * facility_fee,
            total_payable_sum = ((invoice_value * risk_band_interest_rate) + ((limit - invoice_value) * facility_fee)) * term;

        monthly_repaymant.html('$' + monthly_repaymant_sum.toFixed(2));
        total_payable.html('$' + total_payable_sum.toFixed(2));
    });


    var email = $('#email');
    var phone = $('#phone');
    var input = $('.text_input');
    var fbtn =  $('.form_btn');

    function check_phone(phone) {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = phone.val();
        var valid = re.test(myPhone);
        if (valid) {
            phone.addClass('checked');
            phone.removeClass('has_error');
        } else {
            phone.removeClass('checked');
            phone.addClass('has_error');
        }
        if (myPhone == '') {
            phone.removeClass('checked');
            phone.removeClass('has_error');
        }
    };

    function check_mail(email) {
        var re = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var myMail = email.val();
        var valid = re.test(myMail);
        if (valid) {
            email.addClass('checked');
            email.removeClass('has_error');
        } else {
            email.removeClass('checked');
            email.addClass('has_error');
        }
        if (myMail == '') {
            email.removeClass('checked');
            email.removeClass('has_error');
        }
    };
    function hidd_message() {
        if (email.hasClass('checked') && phone.hasClass('checked')) {
            $('.calculation_message').css('display', 'block');
            fbtn.prop('disabled', false);
        }else{
            fbtn.prop('disabled', 'disabled');
        }

    }

    email.blur (function() {
        check_mail(email);
    });
    email.mouseleave (function() {
        check_mail(email);
    });
    phone.blur (function() {
        check_phone(phone);
    });
    phone.mouseleave (function() {
        check_phone(phone);
    });
    input.mouseleave(function () {
        hidd_message();
    });
    input.blur(function () {
        hidd_message();
    });


    $(".credit_form").submit(function () {
        var form = $(this);
        var error = false;

        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'ctrl/mail.php',
                dataType: 'json',
                data: data,
                beforeSend: function (data) {
                    fbtn.attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        $('.errors').html('<h3>Error:' + data['error'] + '</h3>');
                    } else {
                        $('.success').html('<h3>Thanks, your message has been sent.</h3>');
                        $('.calculator_text').addClass('hidden');
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $('.errors').html('<h3>Error:' + thrownError + '</h3>');
                    $('.calculator_text').addClass('hidden');
                },
                complete: function (data) {
                    fbtn.prop('disabled', false);
                }

            });
        }
        return false;
    });

});