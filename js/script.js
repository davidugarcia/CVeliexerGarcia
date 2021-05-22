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

});

class TextoAnimado {
    constructor(id, objetivo) {
        this.texto = document.getElementById(id);
        //console.log(this.texto)
        this.objetivo = document.getElementById(objetivo);
        //console.log(this.objetivo)
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
new TextoAnimado('contact', 'contacto');