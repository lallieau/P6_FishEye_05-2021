export function checkValidityForm() {
  const modalForm = document.querySelector('#modal-form');
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

    if (!firstNameValidation()) {
      firstNameInput.parentNode.setAttribute('data-error-visible', true);
      formularIsValid = false;
    } else {
      firstNameInput.parentNode.setAttribute('data-error-visible', false);
    }

    if (!lastNameValidation()) {
      lastNameInput.parentNode.setAttribute('data-error-visible', true);
      formularIsValid = false;
    } else {
      lastNameInput.parentNode.setAttribute('data-error-visible', false);
    }

    if (!emailValidation()) {
      emailInput.parentNode.setAttribute('data-error-visible', true);
      formularIsValid = false;
    } else {
      emailInput.parentNode.setAttribute('data-error-visible', false);
    }

    if (!messageValidation()) {
      messageInput.parentNode.setAttribute('data-error-visible', true);
      formularIsValid = false;
    } else {
      messageInput.parentNode.setAttribute('data-error-visible', false);
    }

    if (formularIsValid) {
      modalForm.style.display = 'none';

      console.log('Prénom : ' + firstNameInput.value);
      console.log('Nom : ' + lastNameInput.value);
      console.log('Email : ' + emailInput.value);
      console.log('Message : ' + messageInput.value);
    }
  }
}
