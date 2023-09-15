function FactorialaEskatu() {
    var zenbaki;
    var factorial = 1;
    
    while (true) {
        zenbaki = parseInt(prompt("Sartu zenbaki bat:"));
        
        if (!isNaN(zenbaki) && zenbaki >= 0) {
            for (var i = 1; i <= zenbaki; i++) {
                factorial *= i;
            }
            break; // Salir del bucle si se ingresó un número válido
        } else {
            alert("Sartu zenbaki baliogarria eta positiboa.");
        }
    }

    alert(zenbaki + " zenbakiaren faktoriala: " + factorial);
}



    
