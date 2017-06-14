$(document).ready(function () {
    function e(e, a) {
        var s = /^\d[\d\(\)\ -]{4,14}\d$/, r = e.val();
        s.test(r) ? (e.addClass("checked"), e.removeClass("has_error"), a.val(r)) : (e.removeClass("checked"), e.addClass("has_error")), "" == r && (e.removeClass("checked"), e.removeClass("has_error"))
    }

    function a(e, a) {
        var s = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i, r = e.val();
        s.test(r) ? (e.addClass("checked"), e.removeClass("has_error"), a.val(r)) : (e.removeClass("checked"), e.addClass("has_error")), "" == r && (e.removeClass("checked"), e.removeClass("has_error"))
    }

    function s() {
        r.hasClass("checked") && o.hasClass("checked") ? d.prop("disabled", !1) : d.prop("disabled", "disabled")
    }

    $(window).on("scroll", function () {
        var e = $(window).scrollTop(), a = $("#invest_count"), s = a.attr("data-value"), r = $.animateNumber.numberStepFactories.separator(",");
        e >= 5 ? $(".header").addClass("fixed") : $(".header").removeClass("fixed"), 0 != a.length && e > a.offset().top - $(window).height() + 50 && a.animateNumber({
            number: s,
            numberStep: r
        }, 5e3)
    }), $(".range_summ").asRange({
        keyboard: !0, tip: !0, format: function (e) {
            e = e.toString();
            for (var a = /(-?\d+)(\d{3})/; a.test(e);)e = e.replace(a, "$1 $2");
            return e
        }
    }), $(".range_summ").on("asRange::change", function (e) {
        var a = $("#summ").val(), s = $("#time").val(), r = $(".monthly_repaymant"), o = $(".total_payable"), t = 1.3 / 100 * 5e4 + .0042 * (a - 5e4), l = (1.3 / 100 * 5e4 + .0042 * (a - 5e4)) * s, n = t.toFixed(0), d = l.toFixed(0);
        n = n.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1,"), d = d.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1,"), r.html("$" + n), o.html("$" + d)
    });
    var r = $("#email"), o = $("#phone"), t = $("#modal-email"), l = $("#modal-phone"), n = $(".text_input"), d = $(".form_btn"), i = $(".modal_btn");
    r.blur(function () {
        a(r, t)
    }), r.mouseleave(function () {
        a(r, t)
    }), o.blur(function () {
        e(o, l)
    }), o.mouseleave(function () {
        e(o, l)
    }), n.mouseleave(function () {
        s()
    }), n.blur(function () {
        s()
    }), d.on("click", function (e) {
        e.preventDefault(), $(".calculation_message").css("display", "block"), d.css("display", "none"), $(".j-modal-toggle").css("display", "inline-block")
    }), $(".credit_form").submit(function () {
        var e = $(this), a = e.serialize();
        return $.ajax({
            type: "POST", url: "ctrl/mail.php", dataType: "json", data: a, beforeSend: function (e) {
                i.attr("disabled", "disabled")
            }, success: function (e) {
                e.error ? $(".errors").html("<h3>Error:" + e.error + "</h3>") : ($(".success").html("<h3>Thanks, your message has been sent.</h3>"), $(".calculator_text").addClass("hidden"))
            }, error: function (e, a, s) {
                $(".errors").html("<h3>Error:" + s + "</h3>"), $(".calculator_text").addClass("hidden")
            }, complete: function (e) {
                i.prop("disabled", !1)
            }
        }), !1
    }), $("#main_bg_img").change(function () {
        var e = $(this)[0];
        if (e.files && e.files[0])if (e.files[0].type.match("image.*")) {
            var a = new FileReader;
            a.onload = function (e) {
                $("#image_preview").attr("src", e.target.result)
            }, a.readAsDataURL(e.files[0])
        } else console.log("is not image mime type"); else console.log("not isset files data or files API not supordet")
    })
});