function postDatos(data) {
  requestCRUD("POST", data).then((response) => response);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("enviar").addEventListener("click", function (e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre");
    let actoractriz = document.getElementById("actoractriz");
    let año = document.getElementById("año");
    let sinopsis = document.getElementById("sinopsis");
    let emisora = document.getElementById("emisora");
    let genero = document.getElementById("genero");
    let cantcaps = document.getElementById("cantcaps");
    // let foto = document.getElementById("foto").value; // Obtener el archivo de imagen
    let link = document.getElementById("link");



    postDatos({ nombre: nombre.value, actoractriz: actoractriz.value, año: año.value, sinopsis: sinopsis.value, emisora: emisora.value, genero: genero.value, cantcaps: cantcaps.value, link: link.value });
    [nombre, actoractriz, año, sinopsis, emisora, genero, cantcaps, link].forEach(element => element.value = "");
    


    alert("Agregada con éxito");
  });
});
