function crearCarta() {
    var cartita =  document.getElementById("rut").value+"\n" +
    document.getElementById("nombre").value+"\n" +
    document.getElementById("paterno").value+"\n" +
    document.getElementById("materno").value+"\n" +
    document.getElementById("nacimiento").value+"\n" +
    document.getElementById("edad").value+"\n" +
    document.getElementById("genero").value+"\n" +
    document.getElementById("email").value+"\n" +
    document.getElementById("celular").value+"\n" +
    document.getElementById("profesion").value+"\n" +
    document.getElementById("motivo").value+"\n";
    
    document.getElementById("carta").value = cartita;
}
