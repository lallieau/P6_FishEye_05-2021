const buttonContact = document.querySelector('.button-contact');
const modalForm = document.querySelector('.modal-form');
const modalCloseBtn = document.querySelector('.close');

buttonContact.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

function openModal() {
  modalForm.style.display = 'block';
}

function closeModal() {
  modalForm.style.display = 'none';
  document.location.reload();
}
