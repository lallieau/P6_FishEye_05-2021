export function renderSumLikes() {
  const mediaLikes = document.querySelectorAll('.medias__infos__likes__sum');
  const allMediasLikes = document.querySelector('.total-likes__sum');

  const sumMediasLikes = new Array();
  const reducer = (accumulator, curr) => accumulator + curr;

  mediaLikes.forEach(element => {
    let sumLike = parseInt(element.textContent);

    sumMediasLikes.push(sumLike);

    const addLikes = () => {
      sumLike++;
      element.innerHTML = sumLike;
      result++;
      allMediasLikes.innerHTML = result;
    };

    element.addEventListener('click', () => addLikes());
  });

  let result = sumMediasLikes.reduce(reducer);
  allMediasLikes.innerHTML = result;
}
