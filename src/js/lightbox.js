export function renderLightbox() {
  const links = document.querySelectorAll('div[data-href$=".jpg"], div[data-href$=".mp4"]');
  const mainContent = document.getElementById('main-content');
  const headerContent = document.getElementById('header__title');
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
    // image.setAttribute('tabindex', '0');
    container.append(image);
  };

  const generateLightboxTemplate = () => {
    mainContent.setAttribute('aria-hidden', 'true');
    mainContent.setAttribute('tabindex', '-1');

    headerContent.setAttribute('aria-hidden', 'true');
    headerContent.setAttribute('tabindex', '-1');

    const template = document.createElement('div');
    template.classList.add('lightbox');

    template.setAttribute('aria-hidden', 'false');
    template.setAttribute('tabindex', '0');

    template.innerHTML = `<button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
      </div>`;

    document.querySelector('body').append(template);

    template.focus();
    const closeBtn = document.querySelector('.lightbox__close');
    closeBtn.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLightbox();
      }
    });
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

    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextImage(event);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevImage(event);
      }
    });
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

    link.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        generateLightboxTemplate();

        const container = document.querySelector('.lightbox__container');
        loadMedia(url, index, container);
      }
    });
  });
}
