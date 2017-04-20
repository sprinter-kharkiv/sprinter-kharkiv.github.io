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
        if (elem.length != 0 && scrTop > elem.offset().top - $(window).height() + 50) {
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
        tip: true,
        format: function(value) {
            //return value.toLocaleString();

            value = value.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(value))
                value = value.replace(pattern, "$1 $2");

            return value;
        }
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
        var arg1 = monthly_repaymant_sum.toFixed(0);
        var arg2 = total_payable_sum.toFixed(0);
            arg1 = arg1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            arg2 = arg2.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        monthly_repaymant.html('$' + arg1);
        total_payable.html('$' + arg2);
    });


    var email = $('#email');
    var phone = $('#phone');
    var modal_email = $('#modal-email');
    var modal_phone = $('#modal-phone');
    var input = $('.text_input');
    var fbtn =  $('.form_btn');
    var mbtn =  $('.modal_btn');




    function check_phone(phone, modPhone) {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = phone.val();
        var valid = re.test(myPhone);
        if (valid) {
            phone.addClass('checked');
            phone.removeClass('has_error');
            modPhone.val(myPhone);
        } else {
            phone.removeClass('checked');
            phone.addClass('has_error');
        }
        if (myPhone == '') {
            phone.removeClass('checked');
            phone.removeClass('has_error');
        }
    }

    function check_mail(email, modEmail) {
        var re = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var myMail = email.val();
        var valid = re.test(myMail);
        if (valid) {
            email.addClass('checked');
            email.removeClass('has_error');
            modEmail.val(myMail);
        } else {
            email.removeClass('checked');
            email.addClass('has_error');
        }
        if (myMail == '') {
            email.removeClass('checked');
            email.removeClass('has_error');
        }
    }
    function hidd_message() {
        if (email.hasClass('checked') && phone.hasClass('checked')) {
            fbtn.prop('disabled', false);
        }else{
            fbtn.prop('disabled', 'disabled');
        }
    }


    email.blur (function() {
        check_mail(email, modal_email);
    });
    email.mouseleave (function() {
        check_mail(email, modal_email);
    });
    phone.blur (function() {
        check_phone(phone, modal_phone);
    });
    phone.mouseleave (function() {
        check_phone(phone, modal_phone);
    });
    input.mouseleave(function () {
        hidd_message();
    });
    input.blur(function () {
        hidd_message();
    });

    fbtn.on('click', function(event){
        event.preventDefault();
        $('.calculation_message').css('display', 'block');
        fbtn.css('display', 'none');
        $('.j-modal-toggle').css('display', 'inline-block');
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
                    mbtn.attr('disabled', 'disabled');
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
                    mbtn.prop('disabled', false);
                }

            });
        }
        return false;
    });

    $('#main_bg_img').change(function() {
        var input = $(this)[0];
        if ( input.files && input.files[0] ) {
            if ( input.files[0].type.match('image.*') ) {
                var reader = new FileReader();
                reader.onload = function(e) { $('#image_preview').attr('src', e.target.result); }
                reader.readAsDataURL(input.files[0]);
            } else console.log('is not image mime type');
        } else console.log('not isset files data or files API not supordet');
    });



});