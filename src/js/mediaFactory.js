export function mediaFactory(media) {
  if (!!media.image) {
    return createImage(media);
  } else if (!!media.video) {
    return createVideo(media);
  }
}

const getMediaInfo = media => {
  return `
    <div class="media__infos">
      <h2>${media.title}</h2>
      <div class="medias__infos__likes">
        <p>${media.likes}</p>
        <i class="fas fa-heart" aria-label="likes"></i>
      </div>
    </div>
  `;
};

function createImage(media) {
  return `
    <article>
      <a href="" aria-label="...., closeup view">
        <img class="media__img" src="../public/assets/medias/${media.image}" alt="${media.title}" />
      </a>
      ${getMediaInfo(media)}
    </article>
  `;
}

function createVideo(media) {
  return `
    <article>
      <a href="" aria-label="...., closeup view">
        <video class="media__img" controls>
          <source src="../public/assets/medias/${media.video}" type="video/mp4">
        </video>
      </a>
      ${getMediaInfo(media)}
    </article>
  `;
}
