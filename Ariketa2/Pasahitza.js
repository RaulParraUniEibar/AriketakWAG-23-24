function PasahitzaSartu(){
    var pasahitza =  (prompt("Sartu pasahitza:")) 
    Lehenengopasahitza = pasahitza;
    var pasahitza2 =  (prompt("Sartu bigarren pasahitza:"))
    Bigarrenpasahitza = pasahitza2;

    if(Lehenengopasahitza == Bigarrenpasahitza){
        alert("Berdina")
    }
    else{
        alert("Okerrak")
    }
}
