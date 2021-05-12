$(document).ready(function() {


    var flag = false;
    var scroll;

    $(window).scroll(function() {
        scroll = $(window).scrollTop();

        if (scroll > 97) {

            if (!flag) {
                $("#image").css({ "top": "12px", "left": "185px", "width": "75px", "height": "80px" });
                $(".tituloPosicion").css({ "top": "95px" });
                $(".header").css({ "background-color": "#3C3C3C" });
                $(".aside").css({ "padding-top": "240px" });
                $("nav li").css({ "border-left": "1px solid #bbb" });
                $("nav li:last-child").css({ "border-right": "none" });
                $("li a").css({ "color": "white" });
                $(".altocontacto").css({ "height": "300px" });

                flag = true;
            }
        } else {
            if (flag) {
                $("#image").css({ "top": "100px", "left": "123px", "width": "190px", "height": "207px" });
                $("#picture").css({ "width": "100%" });
                $(".header").css({ "background-color": "transparent" });
                $(".tituloPosicion").css({ "top": "312px" });
                $(".aside").css({ "padding-top": "350px" });
                $("li a").css({ "color": "black" });
                $(".altocontacto").css({ "height": "200px" });

                flag = false;
            }
        }
    });

});