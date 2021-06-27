const closeLightbox = () => {
  document.querySelector('.lightbox').classList.add('fadeOut');
  //document.location.reload();
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

const loadImage = url => {
  const image = new Image();
  const container = document.querySelector('.lightbox__container');
  image.src = url;
  container.append(image);
};

const links = Array.from(document.querySelectorAll('div[data-href$=".jpg"]'));

links.forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    lightboxTemplate();

    const url = link.getAttribute('data-href');

    loadImage(url);
  }),
);

// console.log(document.querySelectorAll(image.getAttribute('href')));
// const gallery = links.map(link => image.getAttribute('href'));
// console.log(gallery);

// STEP next / previous

// Add a global variable including all href elements (images)

// Find current position inside the global object

// on next or previous click switch container depending on href  (step 3 of initial todolist)
