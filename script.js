//Got a new headache.
// An issue with the close button is fixed,
// but now save button if not working.
// Any advice on how to fix this?

const formElement = document.querySelector('.popup');
const formEdit = document.querySelector('.popup__container');

const profileEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-icon');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const nameInput = formEdit.querySelector('.popup__profile-title');
const jobInput = formEdit.querySelector('.popup__profile-subtitle');


    function displayPopup(evt) {
        evt.stopPropagation();

        if (formElement.classList.contains('popup_closed')) {
            nameInput.value = profileTitle.textContent;
            jobInput.value = profileSubtitle.textContent;
        }

        formElement.classList.toggle('popup_opened')
    }

    function formSubmitHandler(evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileSubtitle.textContent = jobInput.value;

        displayPopup()
    }

formElement.addEventListener('submit', formSubmitHandler);
profileEdit.addEventListener('click', displayPopup);
popupClose.addEventListener('click', displayPopup);