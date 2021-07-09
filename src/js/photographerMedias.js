import { urlId } from './photographerDetail.js';
import { mediaFactory } from './mediaFactory.js';

export function renderMedias(filterUrl, media) {
  const sortBy = filterUrl.get('sortBy');
  const option = document.querySelectorAll('.option input');
  const mediaElement = document.querySelector('#medias');

  const displayMedias = () => {
    if (sortBy === 'popularity') {
      const photographerMedias = media.filter(
        photographerMedias => photographerMedias.photographerId === parseInt(urlId),
        photographerMedias => photographerMedias.likes,
      );
      mediaElement.innerHTML = photographerMedias
        .sort(function (a, b) {
          return b.likes - a.likes;
        })
        .map(mediaFactory)
        .join('');
    }

    if (sortBy === 'date') {
      const photographerMedias = media.filter(
        photographerMedias => photographerMedias.photographerId === parseInt(urlId),
        photographerMedias => photographerMedias.date,
      );
      mediaElement.innerHTML = photographerMedias
        .sort(function (a, b) {
          a = new Date(a.date);
          b = new Date(b.date);
          return a > b ? -1 : a < b ? 1 : 0;
        })
        .map(mediaFactory)
        .join('');
    }

    if (sortBy === 'title') {
      const photographerMedias = media.filter(
        photographerMedias => photographerMedias.photographerId === parseInt(urlId),
        photographerMedias => photographerMedias.title,
      );
      mediaElement.innerHTML = photographerMedias
        .sort(function (a, b) {
          return a.title.toLowerCase().localeCompare(b.title);
        })
        .map(mediaFactory)
        .join('');
    }
  };

  option.forEach(input => {
    const newSortBy = input.value;
    if (newSortBy === sortBy) {
      input.setAttribute('checked', true);
      // displayMedias(filterUrl, newSortBy);
      displayMedias();
    }
    input.addEventListener('change', () => {
      filterUrl.set('sortBy', newSortBy);
      // window.location.search = filterUrl.toString();
      window.location.search = filterUrl;
    });
  });
}
