document.addEventListener("DOMContentLoaded", () => {
    let URL = "http://localhost:3001/entrega20/";
    let info = document.getElementById("aca");
  
    fetch(URL, {
      headers: {
        'access-token': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("La data es", data); //
        for (let i = 0; i < data.length; i++) {
            let serie = data[i]
                  info.innerHTML += `
          <div class="card">
            <figure class="card__thumb">
                <img src="img/fondo.jpg" class="card__image">
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