export function renderSumLikes() {
  const mediaLikesElement = document.querySelectorAll('.medias__infos__likes__sum');
  const allMediasLikesElement = document.querySelector('.total-likes__sum');
  let allLikes = 0;

  mediaLikesElement.forEach(element => {
    let likes = parseInt(element.textContent);
    allLikes += likes;

    const handleUpdateLikes = () => {
      element.innerHTML = ++likes;
      allMediasLikesElement.innerHTML = ++allLikes;
    };

    element.addEventListener('click', handleUpdateLikes);
  });

  allMediasLikesElement.innerHTML = allLikes;
}
