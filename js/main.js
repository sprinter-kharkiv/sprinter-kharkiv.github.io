/**
 * Created by Admin on 25.11.2015.
 */
$(document).ready(function() {

    // Mobile menu
    $('#trig').on('click', function () {
        $('.header_nav').toggleClass('vis-menu')
    });
    $('.header_nav').on('click', function () {
        $('.header_nav').removeClass('vis-menu')
    });

    // init WOW
    new WOW().init();

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
    $(".scroll-bg").each(function(){
        var $bgobj = $(this);

        $(window).scroll(function(){
            var yPos = -($(window).scrollTop() /  $bgobj.data("speed"));
            var coords = "50%" + yPos + "px";

            $bgobj.css(
                "background-position" , coords);
        })
    });


    // form submit
    $("#contact").submit(function() {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: str,
            success: function(msg) {
                if(msg == 'OK') {
                    result = '<div class="ok">Сообщение отправлено</div>';

                }
                else {result = msg;}
                $('#note').html(result);
            }
        });
        return false;
    });
});
