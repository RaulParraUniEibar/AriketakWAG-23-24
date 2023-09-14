function NotaEskatu(){
    var i = 3;
    var suma = 0;
    while (i>0){
    var nota =  parseInt(prompt("Sartu nota bat:"))

    if (!isNaN(nota)) {
        suma += nota;
        i--;
    } else {
        alert("Ez duzu sartu zenbakirik");
    }

    }

    var media = suma/3

    if(media>=5){
        alert("Gaindituta")
    }
    else{
        alert("Penkatuta")
    }
}