function LiburuIrakurri(liburuak) {
    
var liburuak = [
    { titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", leido: true },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido: false },
    { titulo: "Las aventuras de teo", autor: "Pepe Rodriguez", leido: true },
    { titulo: "Teo va al parque", autor: "Antonio Perez", leido: false }
];


    for (var i = 0; i < liburuak.length; i++){
        liburua = liburuak[i];
    if (liburua.leido) {
        alert("Este libro está leído: " + liburua.autor + "liburua " + liburua.titulo );
    } else {
        alert("Este libro no está leído: " + liburua.autor + "liburua " + liburua.titulo );
    }
}
}