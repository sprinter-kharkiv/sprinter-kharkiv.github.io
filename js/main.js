
$(document).ready(function () {

    $('.menu-trigger').on('click', function () {
        $('.header').toggleClass('vis-menu');
        $('.wrapper').toggleClass('vis-menu')
    });
    $('.navigation_link').on('click', function(){
        $('.header').removeClass('vis-menu')
    });

});
