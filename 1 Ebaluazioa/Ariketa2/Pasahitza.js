function PasahitzaSartu(){
    var Lehenengopasahitza = prompt("Sartu pasahitza:");
    var Bigarrenpasahitza = prompt("Sartu bigarren pasahitza:");

    while (Lehenengopasahitza !== Bigarrenpasahitza) {
        alert("Pasahitzak ez datoz bat. Mesedez, saiatu berriro.");
        Bigarrenpasahitza = prompt("Sartu bigarren pasahitza:");
    }
    alert("Berdina")
}
