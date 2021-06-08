fetch('./data.json')
  .then(response => {
    return response.json();
  })
  .then(({ photographers }) => {
    const photographersElement = document.querySelector('#photographers');
    photographersElement.innerHTML = photographers.map(template).join('');
  })

  .catch(error => {
    console.error(error);
  });

const template = photographer =>
  `<article class="photographer">
    <a href="./photographer-page.html?id=${photographer.id}" aria-label="" class="photographer__link">
      <img class="photographer__link__portrait" src="./public/assets/Photographers/${photographer.portrait}" alt="" />
      <h2 class="photographer__link__name">${photographer.name}</h2>
    </a>
    <div class="photographer__details">
      <p class="photographer__details__location">${photographer.city + ', ' + photographer.country}</p>
      <p class="photographer__details__tagline">${photographer.tagline}</p>
      <p class="photographer__details__price">${photographer.price} €</p>
    </div>
    <div class="photographer__tags ">
    ${photographer.tags.map(tag => `<span class="photographer__tags__tag">#${tag}</span>`).join('')}
    </div>
  </article>`;
