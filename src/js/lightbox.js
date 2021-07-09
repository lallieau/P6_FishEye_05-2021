export function renderLightbox() {
  const links = document.querySelectorAll('div[data-href$=".jpg"], div[data-href$=".mp4"]');

  const gallery = [];
  const mediaName = document.createElement('p');
  mediaName.classList.add('lightbox__container__media-name');

  const closeLightbox = () => {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.add('fadeOut');
    setTimeout(() => lightbox.remove(), 300);
  };

  const createMediaName = url => {
    let array = url.split('/');
    let mediaNameContent = array[array.length - 1].replaceAll('_', ' ');
    if (mediaNameContent.endsWith('.jpg')) {
      return mediaNameContent.replace('.jpg', ' ');
    } else {
      return mediaNameContent.replace('.mp4', ' ');
    }
  };

  const generateVideoTemplate = (url, container) => {
    container.innerHTML = `<video class="lightbox__container__video" controls>
    <source src="${url}" type="video/mp4">
  </video>`;
  };

  const generateImageTemplate = (url, container) => {
    const image = new Image();
    image.src = url;
    container.append(image);
  };

  const generateLightboxTemplate = () => {
    const template = document.createElement('div');
    template.classList.add('lightbox');
    template.innerHTML = `<button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
      </div>`;

    document.querySelector('body').append(template);

    const closeBtn = document.querySelector('.lightbox__close');
    closeBtn.addEventListener('click', closeLightbox);
  };

  const loadMedia = (url, index, container) => {
    const isNextMedia = index === gallery.length - 1;
    const isFirstMedia = index === 0;

    if (url.endsWith('.mp4')) {
      generateVideoTemplate(url, container);
    }
    if (url.endsWith('.jpg')) {
      generateImageTemplate(url, container);
    }

    mediaName.innerText = createMediaName(url);
    container.append(mediaName);

    const nextImage = e => {
      container.innerHTML = '';
      e.preventDefault();

      if (isNextMedia) {
        index = -1;
      }

      loadMedia(gallery[index + 1], index + 1, container);
    };

    const prevImage = e => {
      container.innerHTML = '';
      e.preventDefault();

      if (isFirstMedia) {
        index = gallery.length;
      }

      loadMedia(gallery[index - 1], index - 1, container);
    };

    const nextButton = document.querySelector('.lightbox__next');
    nextButton.addEventListener('click', nextImage);

    const prevButton = document.querySelector('.lightbox__prev');
    prevButton.addEventListener('click', prevImage);
  };

  links.forEach(link => {
    const url = link.getAttribute('data-href');
    gallery.push(url);

    const index = gallery.findIndex(galleryURL => galleryURL === url);

    link.addEventListener('click', e => {
      e.preventDefault();

      generateLightboxTemplate();

      const container = document.querySelector('.lightbox__container');
      loadMedia(url, index, container);
    });
  });
}
