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

function mostrarDatos() {
    // Obtener los valores de los campos del formulario
    var genre = document.querySelector('input[name="gender"]:checked').value;
    var izena = document.getElementById("izena").value;
    var abizena = document.getElementById("abizena").value;
    var helbidea = document.getElementById("helbidea").value;
    var hiria = document.getElementById("hiria").value;
    var gustokoena = document.querySelector('input[name="Gustokoena"]:checked').value;

    // Construir un mensaje con los datos
    var mensaje = "<b> Zuzentzeko era: </b>" + genre + "<br>";
    mensaje += "<b> Izena: </b>" + izena + "<br>";
    mensaje += "<b> Abizena: </b>" + abizena + "<br>";
    mensaje += "<b> Helbidea: </b>" + helbidea + "<br>";
    mensaje += "<b> Hiria: </b>" + hiria + "<br>";
    mensaje += "<b> Gustokoena: </b>" + gustokoena + "<br>";
    
    
    // Mostrar el mensaje en el div resultado
    document.getElementById("datosformulario").innerHTML =  mensaje;
}