const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlId = urlParams.get('id');

fetch('./data.json')
  .then(response => {
    return response.json();
  })
  .then(({ photographers }) => {
    const photographer = photographers.filter(photographer => photographer.id === parseInt(urlId));

    const photographerElement = document.querySelector('#photographer');
    photographerElement.innerHtml = photographer.map(singlePhotographerTemplate);
    console.log(photographer.map(singlePhotographerTemplate));
  })
  .catch(error => {
    console.error(error);
  });

const singlePhotographerTemplate = photographer =>
  `<img class="photographer__portrait" src="./public/assets/Photographers/${photographer.portrait}" alt="" />
<div class="photographer__infos">
  <button class="button-contact">Contactez-moi</button>
  <div class="photographer__infos__content">
    <h2 class="photographer__name">${photographer.name}</h2>
    <p class="photographer__location">${photographer.city + ', ' + photographer.country}</p>
    <p class="photographer__tagline">${photographer.tagline}</p>
    <div class="photographer__tags">
    ${photographer.tags.map(tag => `<span class="photographer__tags__tag">#${tag}</span>`).join('')}
    </div>
  </div>
</div>`;
