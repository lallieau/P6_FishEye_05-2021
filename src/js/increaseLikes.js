export function renderSumLikes() {
  const mediaLikesElement = document.querySelectorAll('.medias__infos__likes');
  const allMediasLikesElement = document.querySelector('.total-likes__sum');
  let allLikes = 0;

  mediaLikesElement.forEach(element => {
    const likesElement = element.querySelector('.medias__infos__likes__sum');
    let likes = parseInt(likesElement.textContent);
    allLikes += likes;

    const handleUpdateLikes = () => {
      likesElement.innerHTML = ++likes;
      allMediasLikesElement.innerHTML = ++allLikes;
    };

    element.addEventListener('click', handleUpdateLikes);
  });

  allMediasLikesElement.innerHTML = allLikes;
}
