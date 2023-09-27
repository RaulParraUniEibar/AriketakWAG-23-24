
        var irudiak = ["img/messi1.gif", "img/messi2.jpg", "img/messi3.jpg", "img/messi4.jpg"];
        // Irudiak galerian gehitzeko funtzioa
        function irudiaGehitu() {
            var imagenes = document.querySelectorAll(".irudi");

            // Obtener la cantidad de imágenes
            var argazkiKop = imagenes.length;

            if (argazkiKop >= 4) {
                alert("Ezin dira irudi gehiago sartu");
            } else {
                var irudia = document.createElement("img");
                irudia.setAttribute("src", irudiak[argazkiKop]); // Cambia "berezia.png" por la ruta de tu imagen
                irudia.setAttribute("class", "irudi");
                irudia.onclick = irudiaKlikatu;
                document.getElementById("galeria").appendChild(irudia);
                // No es necesario usar un array para seguir la cantidad de imágenes
            }


        }



        // Irudi bati klik egitean gertatuko den ekintza
        function irudiaKlikatu() {
            var irudia = this;
            if (irudia.parentNode) {
                irudia.parentNode.removeChild(irudia);
            }

            irudiaKlikatu().argazkiKop--;
        }
