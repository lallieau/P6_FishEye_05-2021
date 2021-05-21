//let data = fetch('./src/data.json').then(response => response.json().then(console.log));

//console.log(data);

/*

const getPhotographer = async function () {
  try {
    let response = await fetch('./src/data.json');
    if (response.ok) {
      let data = await response.json();
      console.log(data.photographers);
    } else {
      console.error('Retour du serveur : ', response.status);
    }
  } catch (e) {
    console.log(e);
  }
};

*/
// Récupérer les données des photographes

fetch('./data.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    let photographers = data.photographers;
    showPhotographers(photographers);
  })
  .catch(error => {
    console.error(error);
  });

let main = document.querySelector('main');
let photographerArticle = document.getElementsByClassName('photographer');
let photographerLink = document.getElementsByClassName('photographer__link');
let photographerName = document.getElementsByClassName('photographer__link__name');
let photographerPortait = document.getElementsByClassName('photographer__link__portrait');
let photographerLocation = document.getElementsByClassName('photographer__details__location');
let photographerTagline = document.getElementsByClassName('photographer__details__tagline');
let photographerPrice = document.getElementsByClassName('photographer__details__price');
let photographerTag = document.getElementsByClassName('photographer__tags__tag');

function showPhotographers(photographers) {
  for (let i = 0; i < photographers.length; i++) {
    let photographer = photographers[i];

    photographerName.innerText = photographer.name;
    photographerLocation.innerText = photographer.city + ', ' + photographer.country;
    photographerTagline.innerText = photographer.tagline;
    photographerPrice.innerText = photographer.price;

    console.log(photographerName);
  }
}
