document.addEventListener("DOMContentLoaded", function () {
    console.log("listo");

    var flag = false;
    var scrollvertical;
    var ancho;

    var imagen = document.getElementById("image"),
    picture = document.getElementById("picture"),
    tituloPosicion = document.getElementsByClassName("tituloPosicion")[0],
    header = document.getElementsByClassName("header")[0],
    aside = document.getElementsByClassName("aside")[0],
    li = document.querySelectorAll("nav li"),
    link = document.querySelectorAll("li a"),
    espaciocontact = document.getElementsByClassName("espaciocontact")[0];

  // Evento para agregar estilos en el nav.
    window.addEventListener("scroll", function () {

    ancho = document.body.scrollWidth;
    console.log(ancho);

    scrollvertical = window.pageYOffset;
    console.log(scrollvertical);

    if (scrollvertical > 97) {
        if (!flag) {

            /** Abajo */
            header.style.cssText += "background-color: #3C3C3C;";
        
            for (let i = 0; i < link.length; i++) {
                link[i].style.color = "white";
            }

            if (ancho <= 360) {
                /** phone */
                imagen.style.cssText += "top: 75px; left: 135px; width: 90px; height: 100px;";
                tituloPosicion.style.cssText += "top: 180px;";
            } else {
                /** Screen */
                imagen.style.cssText += "top: 12px; left: 207px; width: 75px; height: 80px;";
                tituloPosicion.style.cssText += "top: 95px;";
                
            }

        flag = true;
    }
    } else {
        if (flag) {
            /** Arriba */
            header.style.cssText += "background-color: transparent;";

            for (let i = 0; i < link.length; i++) {
            link[i].style.color = "black";
            }

            if (ancho <= 360) {
                 /** phone */
                imagen.style.cssText += "top: 75px; left: 135px; width: 90px; height: 100px;";
                tituloPosicion.style.cssText += "top: 180px;";
            } else {
                 /** Screen */
                imagen.style.cssText +="top: 100px; left: 149px; width: 190px; height: 207px;";
                tituloPosicion.style.cssText += "top: 312px";
            }

            flag = false;
        }
    }
});

  // funcion para agregar texto animado.
    function Textoanimado(id) {
        var texto = document.getElementById(id);

    // console.log(texto);

        var letras = texto.innerText.split("");

        texto.innerText = "";

        letras.forEach((letra) => {
        let caracter = letra === " " ? "&nbsp;" : letra;
        //console.log(caracter);
        texto.innerHTML =
            texto.innerHTML +
            `
                            <div>
                                <span>${caracter}</span>
                                <span class="segunda-linea">${caracter}</span>
                            </div>
                        `;
        });

    setInterval(encima, 5000);

    function encima() {
        var cuenta = 0;

        //console.log(texto.children.length);

        const intervalo = setInterval(myFunction, 80);

        function myFunction() {
            if (cuenta < texto.children.length) {
            texto.children[cuenta].classList.add("animacion");
            cuenta += 1;
            } else {
            clearInterval(intervalo);
            }
        }
    }

        setInterval(afuera, 9000);

        function afuera() {
        var cuenta = 0;

        //console.log(texto.children.length);

        const intervalo = setInterval(myFunction, 40);

        function myFunction() {
            if (cuenta < texto.children.length) {
            texto.children[cuenta].classList.remove("animacion");
            cuenta += 1;
            } else {
            clearInterval(intervalo);
            }
        }
        }
    }

    Textoanimado("experiencia");
    Textoanimado("portafolio");
    Textoanimado("contact");
});

/**JavaScript */

/*function TextoAnimado(id, objetivo) {

    var texto = document.getElementById(id),
        objetivo = document.getElementById(objetivo);

    console.log(texto);
    console.log(objetivo);

    var letras = texto.innerText.split("");

    texto.innerText = '';

    letras.forEach((letra) => {
        let caracter = letra === ' ' ? '&nbsp;' : letra;
        console.log(caracter);
        texto.innerHTML = texto.innerHTML + `
                    <div>
                        <span>${caracter}</span>
                        <span class="segunda-linea">${caracter}</span>
                    </div>
                `;
    });


    objetivo.addEventListener('mouseover', encima);

    function encima() {

        var cuenta = 0;

        //console.log(texto.children.length);

        const intervalo = setInterval(myFunction, 60);

        function myFunction() {
            if (cuenta < texto.children.length) {
                texto.children[cuenta].classList.add('animacion');
                cuenta += 1;
            } else {
                clearInterval(intervalo);
            }
        }
    };


    objetivo.addEventListener('mouseout', afuera);

    function afuera() {

        var cuenta = 0;

        //console.log(texto.children.length);

        const intervalo = setInterval(myFunction, 30);

        function myFunction() {
            if (cuenta < texto.children.length) {
                texto.children[cuenta].classList.remove('animacion');
                cuenta += 1;
            } else {
                clearInterval(intervalo);
            }
        }
    };

};*/

/**Con JQuery */

/*$(document).ready(function() {

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
                $(".espaciocontact").css({ "height": "285px" });
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
                $(".espaciocontact").css({ "height": "200px" });

                flag = false;
            }
        }
    });

});*/

/*class TextoAnimado {
    constructor(id, objetivo) {
        this.texto = document.getElementById(id);
        console.log(this.texto)
        this.objetivo = document.getElementById(objetivo);
        console.log(this.objetivo)
        this.letras = this.texto.innerText.split("");
        //console.log(this.letras)

        this.texto.innerText = '';

        this.letras.forEach((letra) => {
            let caracter = letra === ' ' ? '&nbsp;' : letra;
            //console.log(caracter)
            this.texto.innerHTML = this.texto.innerHTML + `
                <div>
					<span>${caracter}</span>
					<span class="segunda-linea">${caracter}</span>
				</div>
			`;
        });

        this.objetivo.addEventListener('mouseenter', () => {
            let cuenta = 0;

            const intervalo = setInterval(() => {
                if (cuenta < this.texto.children.length) {
                    this.texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo);
                }
            }, 30);
        });

        this.objetivo.addEventListener('mouseleave', () => {
            let cuenta = 0;

            const intervalo = setInterval(() => {
                if (cuenta < this.texto.children.length) {
                    this.texto.children[cuenta].classList.remove('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo);
                }
            }, 30);
        });

    }
}

new TextoAnimado('experiencia', 'logotipo');
new TextoAnimado('portafolio', 'portafoli');
new TextoAnimado('contact', 'contacto');*/
