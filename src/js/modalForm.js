const buttonContact = document.querySelector('.button-contact');
const modalForm = document.querySelector('.modal-form');
const modalCloseBtn = document.querySelector('.close');
const contactFormElement = document.querySelector('#modal-form');

buttonContact.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

function openModal() {
  modalForm.style.display = 'block';
}

function closeModal() {
  modalForm.style.display = 'none';
}

let formularIsValid = false;

const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function firstNameValidation() {
  let regex = /^[^0-9]{2,}$/;
  let inputValue = firstNameInput.value;
  return regex.test(inputValue);
}

function lastNameValidation() {
  let regex = /^[^0-9]{2,}$/;
  let inputValue = lastNameInput.value;
  return regex.test(inputValue);
}

function emailValidation() {
  let regex = /^\S+@\S+\.\S+$/;
  return regex.test(emailInput.value);
}

function messageValidation() {
  let regex = /^[^0-9]{2,}$/;
  let inputValue = messageInput.value;
  return regex.test(inputValue);
}

function validate(event) {
  event.preventDefault();
  formularIsValid = true;

  if (firstNameValidation()) {
    formularIsValid = false;
  }

  if (!lastNameValidation()) {
    formularIsValid = false;
  }

  if (!emailValidation()) {
    formularIsValid = false;
  }

  if (!messageValidation()) {
    formularIsValid = false;
  }

  if (formularIsValid) {
    modalForm.style.display = 'none';
  }
}

const formTemplate = photographer =>
  `   <div class="form-header">
        <h2 class="form-title">Contactez-moi ${photographer.name}</h2>
        <span class="close"></span>
      </div>
      <form    
      id="form"
      action="photographer-page.html"
      method="get"
      onsubmit="return validate(event)"
      >
        <label for="firstname">Prénom</label>
        <input type="text" name="firstname" id="firstname" />

        <label for="lastname">Nom</label>
        <input type="text" name="lastname" id="lastname" />

        <label for="email">Email</label>
        <input type="email" name="email" id="email" />

        <label for="message">Votre message</label>
        <input type="textarea" name="message" id="message" />

        <input class="button-form button" type="submit" value="Envoyer" />
      </form>
  `;
fetch('../data.json')
  .then(response => {
    return response.json();
  })
  .then(({ photographers }) => {
    const photographer = photographers.filter(photographer => photographer.id === parseInt(urlId));

    contactFormElement.innerHTML = photographer.map(formTemplate).join('');
  })
  .catch(error => {
    console.error(error);
  });
