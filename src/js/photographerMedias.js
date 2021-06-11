import { urlId } from './photographerDetail.js';

const mediaElement = document.querySelector('#medias');
const option = document.querySelector('#trier').value;

fetch('../data.json')
  .then(response => {
    return response.json();
  })
  .then(({ media }) => {
    const photographerMedias = media.filter(
      photographerMedias => photographerMedias.photographerId === parseInt(urlId),
      photographerMedias => photographerMedias.likes,
      photographerMedias => photographerMedias.date,
      photographerMedias => photographerMedias.title,
    );

    /* Le tri par popularité fonctionne mais pas les autres
    if ( option === popularity) ....

    Tri par date
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;

    Tri par popularité
        a.likes - b.likes;

    Tri par titre
        a.title.toLowerCase().localeCompare(b.title)
    */

    mediaElement.innerHTML = photographerMedias
      .sort(function (a, b) {
        a.likes - b.likes;
      })
      .map(photographerMediasTemplate)
      .join('');
  })
  .catch(error => {
    console.error(error);
  });

const photographerMediasTemplate = media =>
  ` <article>
    <a href="" aria-label="...., closeup view">
      <img class="media__img" src="../public/assets/medias/${media.image}" alt="${media.title}" />
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
