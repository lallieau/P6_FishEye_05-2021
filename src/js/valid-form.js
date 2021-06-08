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
