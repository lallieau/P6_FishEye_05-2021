const formTemplate = photographer =>
  `
    <h2 class="form-title">Contactez-moi ${photographer.name}</h2>
    <span class="close"></span>
`;

export function renderModal(photographerDetail) {
  const modalForm = document.querySelector('#modal-form');
  const buttonContact = document.querySelector('.button-contact');
  const formHeader = document.querySelector('.form-header');

  const mainContent = document.getElementById('main-content');

  formHeader.innerHTML = photographerDetail.map(formTemplate).join('');
  const modalCloseBtn = document.querySelector('.close');

  const openModal = () => {
    modalForm.style.display = 'block';

    mainContent.setAttribute('aria-hidden', 'true');
    console.log(mainContent);
    modalForm.setAttribute('aria-hidden', 'false');

    console.log(modalForm);
  };

  const closeModal = () => {
    modalForm.style.display = 'none';
  };

  modalCloseBtn.addEventListener('click', closeModal);
  buttonContact.addEventListener('click', openModal);
}
