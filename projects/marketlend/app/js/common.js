$(document).ready(function(){function e(e){var a=/^\d[\d\(\)\ -]{4,14}\d$/,r=e.val();a.test(r)?(e.addClass("checked"),e.removeClass("has_error")):(e.removeClass("checked"),e.addClass("has_error")),""==r&&(e.removeClass("checked"),e.removeClass("has_error"))}function a(e){var a=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,r=e.val();a.test(r)?(e.addClass("checked"),e.removeClass("has_error")):(e.removeClass("checked"),e.addClass("has_error")),""==r&&(e.removeClass("checked"),e.removeClass("has_error"))}function r(){s.hasClass("checked")&&o.hasClass("checked")?($(".calculation_message").css("display","block"),n.prop("disabled",!1)):n.prop("disabled","disabled")}$(window).on("scroll",function(){var e=$(window).scrollTop(),a=$("#invest_count"),r=a.attr("data-value"),s=$.animateNumber.numberStepFactories.separator(",");e>=5?$(".header").addClass("fixed"):$(".header").removeClass("fixed"),e>a.offset().top-$(window).height()+50&&a.animateNumber({number:r,numberStep:s},1e3)}),$(".range_summ").asRange({keyboard:!0,tip:!0}),$(".range_summ").on("asRange::change",function(e){var a=$("#summ").val(),r=$("#time").val(),s=$(".monthly_repaymant"),o=$(".total_payable"),t=1.3/100*5e4+.0042*(a-5e4),n=(1.3/100*5e4+.0042*(a-5e4))*r;s.html("$"+t.toFixed(2)),o.html("$"+n.toFixed(2))});var s=$("#email"),o=$("#phone"),t=$(".text_input"),n=$(".form_btn");s.blur(function(){a(s)}),s.mouseleave(function(){a(s)}),o.blur(function(){e(o)}),o.mouseleave(function(){e(o)}),t.mouseleave(function(){r()}),t.blur(function(){r()}),$(".credit_form").submit(function(){var e=$(this),a=e.serialize();return $.ajax({type:"POST",url:"ctrl/mail.php",dataType:"json",data:a,beforeSend:function(e){n.attr("disabled","disabled")},success:function(e){e.error?$(".errors").html("<h3>Error:"+e.error+"</h3>"):($(".success").html("<h3>Thanks, your message has been sent.</h3>"),$(".calculator_text").addClass("hidden"))},error:function(e,a,r){$(".errors").html("<h3>Error:"+r+"</h3>"),$(".calculator_text").addClass("hidden")},complete:function(e){n.prop("disabled",!1)}}),!1})});