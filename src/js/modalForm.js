const formTemplate = photographer =>
  `
    <h2 class="form-title">Contactez-moi ${photographer.name}</h2>
    <button class="close"></button>
`;

export function renderModal(photographerDetail) {
  const modalForm = document.querySelector('#modal-form');
  const buttonContact = document.querySelector('.button-contact');
  const formHeader = document.querySelector('.form-header');

  // const mainContent = document.getElementById('main-content');

  formHeader.innerHTML = photographerDetail.map(formTemplate).join('');
  const modalCloseBtn = document.querySelector('.close');

  const openModal = () => {
    modalForm.style.display = 'block';

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    });
    // mainContent.setAttribute('aria-hidden', 'true');
    // modalForm.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modalForm.style.display = 'none';

    buttonContact.focus();
  };

  modalCloseBtn.addEventListener('click', closeModal);
  buttonContact.addEventListener('click', openModal);
}
