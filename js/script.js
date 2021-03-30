$(document).ready(function() {

    var elie = $("#banner").css({ "height": $(window).height() + "px" });
    console.log(elie);
    var flag = false;
    var scroll;

    $(window).scroll(function() {
        scroll = $(window).scrollTop();

        if (scroll > 200) {
            if (!flag) {
                $("#image").css({ "top": "0px", "left": "0px" });
                $("#picture").css({ "margin-top": "15px", "margin-left": "60px", "width": "60px" });
                $("header").css({ "background-color": "#3C3C3C" });
                $("ul li").css({ "color": "white" });

                flag = true;
            }
        } else {
            if (flag) {
                $("#image").css({ "top": "50px", "left": "0px" });
                $("#picture").css({ "margin-top": "70px", "margin-left": "146px", "width": "190px" });
                $("header").css({ "background-color": "transparent" });
                $("ul li").css({ "color": "black" });
                flag = false;
            }
        }
    });

});