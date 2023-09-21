function Cambiarfoto() {
    var radioJauna = document.getElementById("jauna");
    var radioAnderea = document.getElementById("anderea");
    var imagenGenero = document.getElementById("imagenGenero");

    if (radioJauna.checked) {
        imagenGenero.src = "img/caraHombre.jpg";
    }
    if (radioAnderea.checked) {
        imagenGenero.src = "img/caraMujer.jpg";
    }
}