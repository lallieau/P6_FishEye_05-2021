export function renderSumLikes() {
  const mediaLikes = document.querySelectorAll('.medias__infos__likes__sum');

  mediaLikes.forEach(element => {
    const likeValue = element.textContent;
    const sumLike = parseInt(likeValue);

    element.addEventListener('click', () => addLikes(sumLike));
  });

  const addLikes = sumLike => {
    const newSumLike = (sumLike += 1);
    console.log(newSumLike);
  };
}
