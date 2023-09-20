function aldatuAtzera() {
    var imagen = document.getElementById("1");
    var imagenSrc = imagen.getAttribute("src");

    if (imagenSrc === "img/6.jpg") {
        alert("Ezin da atzera egin");
    } else if (imagenSrc === "img/9.jpg") {
        imagen.setAttribute("src", "img/6.jpg");
        document.getElementById("numcami").textContent = "Camiseta 6"; // Cambia el texto a "Camiseta 6"
    } else if (imagenSrc === "img/11.jpg") {
        imagen.setAttribute("src", "img/9.jpg");
        document.getElementById("numcami").textContent = "Camiseta 9"; // Cambia el texto a "Camiseta 9"
    }
}

function aldatuAurrera() {
    var imagen = document.getElementById("1");
    var imagenSrc = imagen.getAttribute("src");

    if (imagenSrc === "img/6.jpg") {
        imagen.setAttribute("src", "img/9.jpg"); // te cambia el src que es img/6.jpg en el index y te lo cambia al 9
        document.getElementById("numcami").textContent = "Camiseta 9"; // Cambia el texto a "Camiseta 9"
    } else if (imagenSrc === "img/9.jpg") {
        imagen.setAttribute("src", "img/11.jpg");
        document.getElementById("numcami").textContent = "Camiseta 11"; // Cambia el texto a "Camiseta 11"
    } else if (imagenSrc === "img/11.jpg") {
        alert("Ezin da aurrera egin");
    }
}
