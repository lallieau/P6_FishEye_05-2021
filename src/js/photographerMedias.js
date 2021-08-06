import { urlId } from './photographerDetail.js';
import { mediaFactory } from './mediaFactory.js';

export function renderMedias(filterUrl, media) {
  const sortBy = filterUrl.get('sortBy');
  const option = document.querySelectorAll('.option input');
  const mediaElement = document.querySelector('#medias');

  const dropdownButton = document.getElementById('options-view-button');
  dropdownButton.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      dropdownButton.setAttribute('checked', 'true');
    }
  });

  const displayMedias = () => {
    if (sortBy === 'popularity') {
      const photographerMedias = media.filter(
        photographerMedias => photographerMedias.photographerId === parseInt(urlId),
        photographerMedias => photographerMedias.likes,
      );
      mediaElement.innerHTML = photographerMedias
        .sort((a, b) => b.likes - a.likes)
        .map(mediaFactory)
        .join('');
    }

    if (sortBy === 'date') {
      const photographerMedias = media.filter(
        photographerMedias => photographerMedias.photographerId === parseInt(urlId),
        photographerMedias => photographerMedias.date,
      );
      mediaElement.innerHTML = photographerMedias
        .sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return a > b ? -1 : a < b ? 1 : 0;
        })
        .map(mediaFactory)
        .join('');
    }

    const photographerMedias = media.filter(
      photographerMedias => photographerMedias.photographerId === parseInt(urlId),
      photographerMedias => photographerMedias.title,
    );
    mediaElement.innerHTML = photographerMedias
      .sort((a, b) => a.title.toLowerCase().localeCompare(b.title))
      .map(mediaFactory)
      .join('');
  };

  option.forEach(input => {
    const newSortBy = input.value;
    if (newSortBy === sortBy) {
      input.setAttribute('checked', true);
      displayMedias();
    }
    input.addEventListener('change', () => {
      filterUrl.set('sortBy', newSortBy);
      window.location.search = filterUrl;
    });
  });
}
