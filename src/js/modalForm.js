const formTemplate = photographer =>
  `
    <h2 class="form-title">Contactez-moi ${photographer.name}</h2>
    <button class="close"></button>
`;

export function renderModal(photographerDetail) {
  const modalForm = document.querySelector('#modal-form');
  const buttonContact = document.querySelector('.button-contact');
  const formHeader = document.querySelector('.form-header');

  const mainContent = document.getElementById('main-content');
  const headerContent = document.getElementById('header__title');

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

    modalForm.setAttribute('aria-hidden', 'false');

    mainContent.setAttribute('aria-hidden', 'true');
    mainContent.setAttribute('tabindex', '-1');

    headerContent.setAttribute('aria-hidden', 'true');
    headerContent.setAttribute('tabindex', '-1');

    modalCloseBtn.focus();
  };

  const closeModal = () => {
    modalForm.style.display = 'none';

    buttonContact.focus();
  };

  modalCloseBtn.addEventListener('click', closeModal);
  buttonContact.addEventListener('click', openModal);
}
