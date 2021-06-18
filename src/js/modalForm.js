const formTemplate = photographer =>
  `
    <h2 class="form-title">Contactez-moi ${photographer.name}</h2>
    <span class="close"></span>
`;

export function renderModal(photographerDetail) {
  const modalForm = document.querySelector('#modal-form');
  const buttonContact = document.querySelector('.button-contact');
  const formHeader = document.querySelector('.form-header');

  formHeader.innerHTML = photographerDetail.map(formTemplate).join('');
  const modalCloseBtn = document.querySelector('.close');
  modalCloseBtn.addEventListener('click', closeModal);

  buttonContact.addEventListener('click', openModal);

  function openModal() {
    modalForm.style.display = 'block';
  }

  function closeModal() {
    modalForm.style.display = 'none';
  }
}
