export function mediaFactory(media) {
  if (!!media.image) {
    return createImage(media);
  }

  if (!!media.video) {
    return createVideo(media);
  }
}

function getMediaInfo(media) {
  return `
    <div class="media__infos">
      <h2>${media.title}</h2>
      <div class="medias__infos__likes">
        <p class="medias__infos__likes__sum">${media.likes}</p>
        <i class="fas fa-heart" aria-label="likes"></i>
      </div>
    </div>
  `;
}

function createImage(media) {
  return `
    <article>
      <div data-href="../public/assets/medias/${media.image}">
        <img class="media__img" src="../public/assets/medias/${media.image}" alt="${media.title}" />
      </div>
      ${getMediaInfo(media)}
    </article>
  `;
}

function createVideo(media) {
  return `
    <article>
      <div data-href="../public/assets/medias/${media.video}" aria-label="video ${media.title}">
        <video class="media__img" controls>
          <source src="../public/assets/medias/${media.video}" type="video/mp4">
        </video>
      </div>
      ${getMediaInfo(media)}
    </article>
  `;
}
