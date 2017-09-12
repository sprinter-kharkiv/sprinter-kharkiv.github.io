
$(document).ready(function () {

    /* Collapsed section action */
    $('.collapse-btn').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.collapsed-holder').slideToggle(500);
    });

$('.menu-trigger').on('click', function () {
    $('.header').toggleClass('vis-menu')
});

    //Floatet label in form action
    $('.form-control').focusout(function () {
        $('.form-group').removeClass('focus');
    });
    $('.form-control').focus(function () {
        $(this).closest('.form-group').addClass('focus');
    });
    $('select.form-control').change(function () {
        $(this).closest('.form-group').addClass('filled');
    });


    /// Input Kepress Filled  Focus
    $('.form-control').keyup(function () {
        if ($(this).val().length > 0) {
            $(this).closest('.form-group').addClass('filled');
        }

        else {
            $(this).closest('.form-group').removeClass('filled');
        }
    });

    /// Input Check Filled Focus
    var $formControl = $('.form-control');
    var values = {};
    var validate = $formControl.each(function () {
        if ($(this).val().length > 0) {
            $(this).closest('.form-group').addClass('filled');
        }
        else {
            $(this).closest('.form-group').removeClass('filled');
        }
    });


});
