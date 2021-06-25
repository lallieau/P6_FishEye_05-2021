const lightboxTemplate = () => {
  const dom = document.createElement('div');
  dom.classList.add('lightbox');
  dom.innerHTML = `<button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
      </div>`;
  return dom;

  // attach this somewhere in html document.querySelector().append(elemet)
};

const links = document
  .querySelectorAll('div[data-href$=".png"], div[data-href$=".jpg"], div[data-href$=".jpeg"]')
  .forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();
      // add a lightbox template
      lightboxTemplate();
      // add image into our lightbox
    }),
  );

const loadImage = url => {
  const image = new Image();
  const container = this.element.querySelector('.lightbox__container');
  const loader = document.createElement('div');
  loader.classList.add('lightbox__loader');
  container.appendChild.loader;
  image.onload = function () {
    container.removeChild(loader);
    container.appendChild(image);
  };
  image.src = url;
};

// 1) lister tous tes images (no link) (probablement devoir rajouter un data-href lors de la création des images afin de récupérer le lien ici)

// 2) Lors du clik d'un de ces liens faire apparaitre la lightbox

// 3) Ajouter l'image en question à la lightbox (dans le container)

// STEP next / previous

// Add a global variable including all href elements (images)

// Find current position inside the global object

// on next or previous click switch container depending on href  (step 3 of initial todolist)

// class Lightbox {
//   static init() {
//     const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]').forEach(link =>
//       link.addEventListener('click', e => {
//         e.preventDefault();
//         new Lightbox(e.currentTarget.getAttribute('href'));
//       }),
//     );
//   }

//   constructor(url) {
//     this.element = this.BuildDOM(url);
//     this.loadImage(url);
//     this.onKeyUp = this.onKeyUp.bind(this);
//     document.body.appendChild(this.element);
//     document.addEventListener('keyup', this.onKeyUp);
//   }

//   loadImage(url) {
//     const image = new Image();
//     const container = this.element.querySelector('.lightbox__container');
//     const loader = document.createElement('div');
//     loader.classList.add('lightbox__loader');
//     container.appendChild.loader;
//     image.onload = function () {
//       container.removeChild(loader);
//       container.appendChild(image);
//     };
//     image.src = url;
//   }

//   onKeyUp(e) {
//     if (e.key === 'Escape') {
//       this.close(e);
//     }
//   }

//   close(e) {
//     e.preventDefault();
//     this.element.classList.add('fadeOut');
//     window.setTimeout(() => {
//       this.element.parentElement.removeChild(this.element);
//     }, 500);
//     document.removeEventListener('keyup', this.onKeyUp);
//   }

//   BuildDOM(url) {
//     const dom = document.createElement('div');
//     dom.classList.add('lightbox');
//     dom.innerHTML = `<button class="lightbox__close">Fermer</button>
//     <button class="lightbox__next">Suivant</button>
//     <button class="lightbox__prev">Précédent</button>
//     <div class="lightbox__container">
//     </div>`;
//     dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
//     return dom;
//   }
// }
