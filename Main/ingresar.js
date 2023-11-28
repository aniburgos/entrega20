function postDatos(data) {
    requestCRUD('POST', data).then((response) => response);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('enviar').addEventListener('click', function (e) {

        e.preventDefault(); // Evitar el comportamiento predeterminado del botón

        let nombre = document.getElementById("nombre").value;
        let actoractriz = document.getElementById("actor-actriz").value;
        let año = document.getElementById("año").value;
        let sinopsis = document.getElementById("sinopsis").value;
        let emisora = document.getElementById("emisora").value;
        let genero = document.getElementById("genero").value;
        let cantcaps = document.getElementById("cantcaps").value;
let foto = document.getElementById("foto").value; // Obtener el archivo de imagen
        let link = document.getElementById("link").value;

        // Crear un objeto FormData para enviar datos del formulario
        let formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('actoractriz', actoractriz);
        formData.append('año', año);
        formData.append('sinopsis', sinopsis);
        formData.append('emisora', emisora);
        formData.append('genero', genero);
        formData.append('cantcaps', cantcaps);
formData.append('foto', foto);
        formData.append('link', link);

        postDatos(formData);


        alert("Agregada con éxito");
    });
});