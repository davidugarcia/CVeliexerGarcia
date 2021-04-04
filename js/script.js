$(document).ready(function() {

    var elie = $("#banner").css({ "height": $(window).height() + "px" });
    console.log(elie);
    var flag = false;
    var scroll;

    $(window).scroll(function() {
        scroll = $(window).scrollTop();

        if (scroll > 190) {
            if (!flag) {
                $("#image").css({ "top": "20px", "left": "122px", "width": "75px", "height": "80px" });
                $("header").css({ "background-color": "#3C3C3C" });
                $("li a").css({ "color": "white" });

                flag = true;
            }
        } else {
            if (flag) {
                $("#image").css({ "top": "130px", "left": "127px", "width": "190px", "height": "207px" });
                $("#picture").css({ "width": "100%" });
                $("header").css({ "background-color": "transparent" });
                $("li a").css({ "color": "black" });
                flag = false;
            }
        }
    });

});