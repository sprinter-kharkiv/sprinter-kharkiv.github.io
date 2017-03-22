function mansoryGrid() {
    $(window).width() < 767 ? $(".grid-floatet").masonry("destroy") : $(".grid-floatet").masonry({
        itemSelector: ".grid-floatet__item",
        columnWidth: 5,
        percentPosition: !0
    })
}
function ScrollTriggerInitial() {
    $(window).width() > 767 && document.addEventListener("DOMContentLoaded", function () {
        new ScrollTrigger({addHeight: !0})
    })
}
ScrollTriggerInitial(), $(document).ready(function () {
    $(".collapse-btn").on("click", function (o) {
        o.preventDefault(), $(this).toggleClass("active"), $(".collapsed-holder").slideToggle(500)
    }), mansoryGrid(), $(".home_slider").slick({arrows: !0, dots: !1}), $(".services_item__slider").slick({
        arrows: !1,
        dots: !0
    }), $(".about_slider").slick({arrows: !1, dots: !0}), $(".team_slider").slick({
        centerMode: !0,
        centerPadding: "160px",
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {arrows: !1, centerMode: !0, centerPadding: "60px", slidesToShow: 3}
        }, {breakpoint: 560, settings: {arrows: !1, centerMode: !0, centerPadding: "20px", slidesToShow: 1}}]
    }), $(".grid-floatet__carousel").slick({
        arrows: !1,
        draggable: !1,
        fade: !0,
        speed: 1e3,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        swipe: !1,
        touchMove: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5e3
    }),
        $(".form-control").focusout(function () {
        $(".form-group").removeClass("focus")
    }), $(".form-control").focus(function () {
        $(this).closest(".form-group").addClass("focus")
    }), $("select.form-control").change(function () {
        $(this).closest(".form-group").addClass("filled")
    }), $(".form-control").keyup(function () {
        $(this).val().length > 0 ? $(this).closest(".form-group").addClass("filled") : $(this).closest(".form-group").removeClass("filled")
    });
    var o = $(".form-control");
    o.each(function () {
        $(this).val().length > 0 ? $(this).closest(".form-group").addClass("filled") : $(this).closest(".form-group").removeClass("filled")
    })
}), $(window).resize(function () {
    mansoryGrid(), ScrollTriggerInitial()
});