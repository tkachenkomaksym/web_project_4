//Can you give me a bit of advice on what I'm doing wrong?
// 1. Onclick event is working, but not removing class with popup_opened
// when I'm pressing the close button.
// 2. Save is working but not replacing text in profile section

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileEdit = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__profile-title');
let jobInput = document.querySelector('.popup__profile-subtitle');
let tmpName;
let tmpJob;

profileEdit.addEventListener('click', displayPopup);
popupClose.addEventListener('click', displayPopup);

    function displayPopup() {
        formElement.classList.toggle('popup_opened')
    }

    function formSubmitHandler (evt) {
        evt.preventDefault();

        tmpName = nameInput.value;
        tmpJob = jobInput.value;

        profileTitle = tmpName.textContent;
        profileSubtitle = tmpJob.textContent;

        displayPopup()
    }

formElement.addEventListener('submit', formSubmitHandler);