const photographersElement = document.querySelector('#photographers');
const anchorLink = document.querySelector('.anchor__link');

document.addEventListener('scroll', () => {
  if (window.scrollY < 220) {
    anchorLink.style.visibility = 'hidden';
  } else {
    anchorLink.style.visibility = 'visible';
  }
});

const fetchPhotographers = filterTag => {
  fetch('./src/data.json')
    .then(response => {
      return response.json();
    })
    .then(({ photographers }) => {
      photographersElement.innerHTML = photographers
        .filter(photographer => {
          if (!!filterTag) {
            return photographer.tags.includes(filterTag.replace('#', '').toLowerCase());
          }
          return true;
        })
        .map(PhotographersListTemplate)
        .join('');
    })
    .catch(error => {
      console.error(error);
    });
};

const tags = document.querySelectorAll('.photographer__tags__tag');

if (tags) {
  tags.forEach(tag => {
    tag.addEventListener('click', e => {
      fetchPhotographers(e.target.textContent);
    });
  });
}

window.onload = () => {
  fetchPhotographers();
};

const PhotographersListTemplate = photographer =>
  `<article class="photographer">
    <a href="./src/pages/photographer-page.html?id=${photographer.id}" aria-label="" class="photographer__link">
      <img class="photographer__link__portrait" src="./src/public/assets/Photographers/${
        photographer.portrait
      }" alt="" />
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
