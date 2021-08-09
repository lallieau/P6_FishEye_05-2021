import { urlId } from './photographerDetail.js';
import { mediaFactory } from './mediaFactory.js';

export function renderMedias(filterUrl, media) {
  const sortBy = filterUrl.get('sortBy');
  const option = document.querySelectorAll('.option input');
  const mediaElement = document.querySelector('#medias');

  // const dropdownButton = document.getElementById('options-view-button');
  // const selectOption = document.querySelector('.select-option[checked="true"]');

  // console.log(selectOption);

  // dropdownButton.addEventListener('keydown', event => {
  //   if (event.key === 'Enter') {
  //     dropdownButton.setAttribute('checked', true);
  //   }
  // });

  // selectOption.addEventListener('blur', () => {
  //   console.log(selectOption);
  //   dropdownButton.removeAttribute('checked');
  // });

  // selectOption.addEventListener('focus', () => {
  //   console.log(selectOption);
  //   dropdownButton.setAttribute('checked', true);
  // });

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
    if (sortBy === 'title') {
      const photographerMedias = media.filter(
        photographerMedias => photographerMedias.photographerId === parseInt(urlId),
        photographerMedias => photographerMedias.title,
      );

      mediaElement.innerHTML = photographerMedias
        .sort((a, b) => a.title.toLowerCase().localeCompare(b.title))
        .map(mediaFactory)
        .join('');
    }

    const selectOption = document.querySelector('.select-option[checked="true"]');
    const dropdownButton = document.getElementById('options-view-button');

    dropdownButton.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        dropdownButton.setAttribute('checked', true);
      }
    });

    selectOption.addEventListener('blur', () => {
      dropdownButton.removeAttribute('checked');
    });

    selectOption.addEventListener('focus', () => {
      dropdownButton.setAttribute('checked', true);
    });
  };

  option.forEach(input => {
    const newSortBy = input.value;

    if (newSortBy === sortBy) {
      input.setAttribute('checked', true);
      displayMedias();
    } else {
      input.removeAttribute('checked');
    }

    input.addEventListener('change', () => {
      filterUrl.set('sortBy', newSortBy);
      window.location.search = filterUrl;
    });
  });
}
