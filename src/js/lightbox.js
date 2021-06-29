export function renderLightbox() {
  const links = document.querySelectorAll('div[data-href$=".jpg"], div[data-href$=".mp4"]');
  const gallery = [];

  const closeLightbox = () => {
    document.querySelector('.lightbox').classList.add('fadeOut');
    // document.location.reload();
  };

  const lightboxTemplate = () => {
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

  const loadMedia = (url, index) => {
    let title = document.createElement('p');
    title.classList.add('lightbox__container__title');
    if (url.endsWith('.mp4')) {
      const container = document.querySelector('.lightbox__container');
      container.innerHTML = '';
      container.innerHTML = `<video class="lightbox__container__video" controls>
      <source src="${url}" type="video/mp4">
    </video>`;
      container.append(title);
    } else {
      const container = document.querySelector('.lightbox__container');
      const image = new Image();
      image.src = url;
      container.innerHTML = '';

      container.append(image);
      container.append(title);
    }

    const createTitleMedia = url => {
      let array = url.split('/');
      let titleContent = array[array.length - 1].replaceAll('_', ' ');
      if (titleContent.endsWith('.jpg')) {
        return titleContent.replace('.jpg', ' ');
      } else {
        return titleContent.replace('.mp4', ' ');
      }
    };

    title.innerText = createTitleMedia(url);

    const nextImage = e => {
      e.preventDefault();
      if (index === gallery.length - 1) {
        index = -1;
      }
      loadMedia(gallery[index + 1], index + 1);
    };

    const prevImage = e => {
      e.preventDefault();
      if (index === 0) {
        index = gallery.length;
      }
      loadMedia(gallery[index - 1], index - 1);
    };

    const nextBtn = document.querySelector('.lightbox__next');
    nextBtn.addEventListener('click', nextImage);

    const prevBtn = document.querySelector('.lightbox__prev');
    prevBtn.addEventListener('click', prevImage);
  };

  links.forEach(link => {
    const url = link.getAttribute('data-href');
    gallery.push(url);
    const index = gallery.indexOf(url);

    link.addEventListener('click', e => {
      e.preventDefault();
      lightboxTemplate();
      loadMedia(url, index);
    });
  });
}
