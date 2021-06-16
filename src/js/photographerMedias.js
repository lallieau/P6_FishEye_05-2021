import { urlId } from './photographerDetail.js';
import { mediaFactory } from './mediaFactory.js';

export function renderMedias(media) {
  const mediaElement = document.querySelector('#medias');
  const option = document.querySelector('#trier');

  option.addEventListener('change', () => {
    displayMedias();
  });

  const displayMedias = () => {
    const photographerMedias = media.filter(
      photographerMedias => photographerMedias.photographerId === parseInt(urlId),
      photographerMedias => photographerMedias.likes,
      photographerMedias => photographerMedias.date,
      photographerMedias => photographerMedias.title,
    );
    mediaElement.innerHTML = photographerMedias
      .sort(function (a, b) {
        if (option.value === 'popularity') {
          return b.likes - a.likes;
        } else if (option.value === 'date') {
          a = new Date(a.date);
          b = new Date(b.date);
          return a > b ? -1 : a < b ? 1 : 0;
        } else if (option.value === 'title') {
          return a.title.toLowerCase().localeCompare(b.title);
        }
      })
      .map(mediaFactory)
      .join('');
  };
  displayMedias();
}
