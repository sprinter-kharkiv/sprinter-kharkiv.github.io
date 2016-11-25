
$(document).ready(function() {

    // Mobile menu
    $('.j-menu-trig').on('click', function () {
        $('.start-screen_header').toggleClass('vis-menu')
    });
    $('.header_nav').on('click', function () {
        $('.start-screen_header').removeClass('vis-menu')
    });

    // find/hidd content
    $('.j-find-trig').on('click', function () {
        $('.additional_content').toggleClass('visible')
    });


    // Tabs
    $('.j-tab-btn').on('click', function(){
        var x = $(this).index();
        $('.j-tab-btn').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        $('.j-tab').each(function(){
            $(this).removeClass('active');
            $('.j-tab').eq(x).addClass('active');
        });
    });

});
