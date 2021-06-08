const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerElement = document.querySelector('#photographer');
const contactFormElement = document.querySelector('#modal-form');
const mediaElement = document.querySelector('#medias');
const urlId = urlParams.get('id');

const singlePhotographerTemplate = photographer =>
  ` <img class="photographer__portrait" src="./public/assets/Photographers/${photographer.portrait}" alt="" />
    <div class="photographer__infos">
      <button class="button-contact button">Contactez-moi</button>
      <div class="photographer__infos__content">
        <h2 class="photographer__name">${photographer.name}</h2>
        <p class="photographer__location">${photographer.city + ', ' + photographer.country}</p>
        <p class="photographer__tagline">${photographer.tagline}</p>
        <div class="photographer__tags">
          ${photographer.tags.map(tag => `<span class="photographer__tags__tag">#${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

const formTemplate = photographer =>
  `   <div class="form-header">
        <h2 class="form-title">Contactez-moi ${photographer.name}</h2>
        <span class="close"></span>
      </div>
      <form    
      id="form"
      action="photographer-page.html"
      method="get"
      onsubmit="return validate(event)"
      >
        <label for="firstname">Prénom</label>
        <input type="text" name="firstname" id="firstname" />

        <label for="lastname">Nom</label>
        <input type="text" name="lastname" id="lastname" />

        <label for="email">Email</label>
        <input type="email" name="email" id="email" />

        <label for="message">Votre message</label>
        <input type="textarea" name="message" id="message" />

        <input class="button-form button" type="submit" value="Envoyer" />
      </form>
  `;

const photographerMediasTemplate = media =>
  ` <article>
      <a href="" aria-label="...., closeup view">
        <img class="media__img" width="100px" src="./public/assets/${media.image}" alt="" />
      </a>
      <div class="media__infos">
        <h2>${media.title}</h2>
        <div class="medias__infos__likes">
          <p>${media.likes}</p>
          <i class="fas fa-heart" aria-label="likes"></i>
        </div>
      </div>
    </article>
  `;

fetch('./data.json')
  .then(response => {
    return response.json();
  })
  .then(({ photographers }) => {
    const photographer = photographers.filter(photographer => photographer.id === parseInt(urlId));

    photographerElement.innerHTML = photographer.map(singlePhotographerTemplate).join('');
    contactFormElement.innerHTML = photographer.map(formTemplate).join('');
  })
  .catch(error => {
    console.error(error);
  });

fetch('./data.json')
  .then(response => {
    return response.json();
  })
  .then(({ media }) => {
    const photographerMedias = media.filter(
      photographerMedias => photographerMedias.photographerId === parseInt(urlId),
    );
    mediaElement.innerHTML = photographerMedias.map(photographerMediasTemplate).join('');
  })
  .catch(error => {
    console.error(error);
  });
