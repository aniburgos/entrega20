document.addEventListener("DOMContentLoaded", () => {
    let URL = "http://localhost:3001/entrega20/";
    let info = document.getElementById("aca");
  
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("La data es", data); //
        for (let i = 0; i < data.length; i++) {
            let serie = data[i]
                  info.innerHTML += `
          <div class="card">
            <figure class="card__thumb">
                <img src="${serie.foto}" class="card__image">
                <figcaption class="card__caption">
                    <h2 class="card__title">${serie.nombre}</h2>
                    <p class="card__snippet">${serie.sinopsis}</p>
                    <a href="${serie.link}" class="card__button">Ver ahora</a>
                </figcaption>
            </figure>
          </div>
        `;
    } });
  });