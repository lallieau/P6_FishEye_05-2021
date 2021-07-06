import { urlId } from './photographerDetail.js';
import { mediaFactory } from './mediaFactory.js';

export function renderMedias(filterUrl, media) {
  const dropdown = document.querySelector('#options');
  const option = document.querySelectorAll('.option input');
  const mediaElement = document.querySelector('#medias');

  const displayMedias = (filterUrl, input) => {
    if (input === 'popularity' && filterUrl === input) {
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

    if (input === 'date' && filterUrl === input) {
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

    if (input === 'title' && filterUrl === input) {
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
    if (input.checked) {
      displayMedias(filterUrl, input.value);
    }
  });

  dropdown.addEventListener('change', () => {
    option.forEach(input => {
      if (input.checked) {
        filterUrl = input.value;
        displayMedias(filterUrl, input.value);
      }
    });
  });
}

// dropdown.addEventListener('change', () => {
//   // console.log(window.location.search);
//   // let url = new URLSearchParams(window.location.search).get('sortBy');
//   //const url = document.location.href;
//   filterUrl = option.value;
//   // console.log(window.location.search);
//   // // console.log(url);
//   // displayMedias();
// });
