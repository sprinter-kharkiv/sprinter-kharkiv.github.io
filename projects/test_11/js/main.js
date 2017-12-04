$(document).ready(function () {

    var $status = $('.pagingInfo');
    var $status_text = $('.pagingInfo_text');
    var $slickElement = $('.slideshow');
    var $sliderNavButton = $('a[data-slide]');

    $slickElement.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (nextSlide ? nextSlide : 0) + 1;
        $status_text.text(i + ' / ' + slick.slideCount);

        var $currentButton = $('[data-slide=' + i + ']');
        var $currentButtonWidth = $currentButton.width() + 20;
        var $currentButtonLeft = $currentButton.position().left;
        var $currentButtonBottom = $currentButton.position().bottom;

        $sliderNavButton.removeClass('active');
        $currentButton.addClass('active');

        $status.width($currentButtonWidth);
        $status.offset({top: $currentButtonBottom, left: $currentButtonLeft});
    });

    /* set opacity = 1 for active tab.
     If the active tab is not defined, the default opacity = 1 is set for the first image in the wrapper  */
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var activeTab = $('.slick-current .active').data('tab-image') || 1;
        $('.slick-current .tabs_content__img').eq(activeTab - 1).css("opacity", 1);
    });

    $(window).resize(function () {
        $activeButton = $('.action').children('.active');
        var $activeButtonLeft = $activeButton.position().left;
        $status.offset({left: $activeButtonLeft});
        $status.width($activeButton.width() + 20);
    });

    /*  init slider  */
    $slickElement.slick({
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 2000
    });

    /* init slider navigation */
    $sliderNavButton.click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $slickElement.slick('slickGoTo', slideno - 1);
    });


    /*  toggle tabs at current slide by '.slide-tabs_describe' buttons */
    $('.slide-tabs_describe').click(function (e) {
        e.preventDefault();

        $('.slick-current .slide-tabs_describe').removeClass('active');
        $(this).addClass('active');

        var tabN = $(this).data('tab-image');

        $('.slick-current .tabs_content__img').css("opacity", 0);
        $('.slick-current .slide-tabs_content img:nth-child(' + tabN + ')').css("opacity", 1);
    });


    /*  init asRange slider */
    $('.range').asRange({
        scale: true,
        format: function (value) {
            value = value.toString();
            for (var a = /(-?\d+)(\d{3})/; a.test(value);)value = value.replace(a, "$1,$2");
            return value;
        }
    });

    $(function() {
        var devider = "<span class='range-devider_item'></span>";
        for(let i=0; i<10; i++){
            $('.range-devider').append(devider);
        }
    });



});

