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

export const urlId = new URLSearchParams(window.location.search).get('id');
const photographerElement = document.querySelector('#photographer');
const photographerPrice = document.getElementById('sum-price-likes__price');

function renderPhotographer({ photographers, media }) {
  const photographerDetail = photographers.filter(photographer => photographer.id === parseInt(urlId));
  photographerElement.innerHTML = photographerDetail.map(PhotographerDetailTemplate).join('');

  photographerPrice.innerHTML = photographerDetail[0].price + ' €';
  renderMedias(media);
  renderModal(photographerDetail);
  renderSumLikes();
  renderLightbox();
}

const PhotographerDetailTemplate = photographer =>
  ` <img class="photographer__portrait" src="../public/assets/Photographers/${photographer.portrait}" alt="" />
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
