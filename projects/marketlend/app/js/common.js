$(document).ready(function(){$(window).on("scroll",function(){var e=$(window).scrollTop(),a=$("#invest_count"),s=a.attr("data-value"),t=$.animateNumber.numberStepFactories.separator(",");e>=5?$(".header").addClass("fixed"):$(".header").removeClass("fixed"),e>a.offset().top-$(window).height()+50&&a.animateNumber({number:s,numberStep:t},1e3)}),$(".range_summ").asRange({keyboard:!0,tip:!0}),$(".range_summ").on("asRange::change",function(e){var a=$("#summ").val(),s=$("#time").val(),t=$(".monthly_repaymant"),o=$(".total_payable"),r=1.3/100*5e4+.0042*(a-5e4),l=(1.3/100*5e4+.0042*(a-5e4))*s;t.html(r.toFixed(2)),o.html(l.toFixed(2))});var e=$("#email"),a=$("#phone"),s=$(".text_input");a.focusout(function(){var e=/^\d[\d\(\)\ -]{4,14}\d$/,s=a.val();e.test(s)?($(this).addClass("checked"),$(this).removeClass("has_error")):($(this).removeClass("checked"),$(this).addClass("has_error")),""==s&&($(this).removeClass("checked"),$(this).removeClass("has_error"))}),e.focusout(function(){console.log("lost");var a=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,s=e.val();a.test(s)?($(this).addClass("checked"),$(this).removeClass("has_error")):($(this).removeClass("checked"),$(this).addClass("has_error")),""==s&&($(this).removeClass("checked"),$(this).removeClass("has_error"))}),s.focusout(function(){e.hasClass("checked")&&a.hasClass("checked")&&($(".calculator_text").removeClass("hidden"),$(".form_btn").removeClass("disabled"))})});