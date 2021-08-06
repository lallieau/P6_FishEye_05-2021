import { renderModal } from './modalForm.js';
import { renderMedias } from './photographerMedias.js';
import { renderSumLikes } from './increaseLikes.js';
import { renderLightbox } from './lightbox.js';

fetch('../data.json')
  .then(response => {
    return response.json();
  })
  .then(json => {
    renderPhotographer(json);
  })
  .catch(error => {
    console.error(error);
  });

const searchParams = new URLSearchParams(window.location.search);
export const urlId = searchParams.get('id');
const photographerElement = document.querySelector('#photographer');
const photographerPrice = document.getElementById('sum-price-likes__price');

function renderPhotographer({ photographers, media }) {
  const photographerDetail = photographers.filter(photographer => photographer.id === parseInt(urlId));
  photographerElement.innerHTML = photographerDetail.map(PhotographerDetailTemplate).join('');
  photographerPrice.innerHTML = photographerDetail[0].price + ' €';
  renderMedias(searchParams, media);
  renderModal(photographerDetail);
  renderSumLikes();
  renderLightbox();
}

const PhotographerDetailTemplate = photographer =>
  ` <img class="photographer__portrait" src="../public/assets/Photographers/${
    photographer.portrait
  }" alt="Photo portrait de ${photographer.name}" />
    <button class="button-contact">Contactez-moi</button>
      <div class="photographer__infos" aria-label="information du photographe">
        <h1 class="photographer__name">${photographer.name}</h1>
        <h2 class="photographer__location" aria-label="localisation du photographe">${
          photographer.city + ', ' + photographer.country
        }</h2>
        <p class="photographer__tagline" aria-label="Slogan du photographe">${photographer.tagline}</p>
        <div class="photographer__tags" aria-label="Catégories du photographes">
          ${photographer.tags.map(tag => `<span class="photographer__tags__tag">#${tag}</span>`).join('')}
        </div>
      </div>
  `;
