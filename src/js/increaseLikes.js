export function renderSumLikes() {
  const mediaLikes = document.querySelectorAll('.medias__infos__likes__sum');
  const allMediasLikes = document.querySelector('.total-likes__sum');

  const sumMediasLikes = new Array();
  const reducer = (accumulator, curr) => accumulator + curr;
  const showSumMediasLikes = () => (allMediasLikes.innerHTML = sumMediasLikes.reduce(reducer));

  mediaLikes.forEach(element => {
    let sumLike = parseInt(element.textContent);
    sumMediasLikes.push(sumLike);

    const addLikes = () => {
      sumLike++;
      element.innerHTML = sumLike;
    };

    element.addEventListener('click', () => addLikes());
  });
  showSumMediasLikes();
}
