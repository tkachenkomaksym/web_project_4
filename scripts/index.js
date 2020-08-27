import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const defaultConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: ".button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
};

const editFormElement = document.querySelector('.popup_type_edit-profile');
const addCardFormElement = document.querySelector('.popup_type_add-card');

const editProfileForm = editFormElement.querySelector('.popup__form')
const addCardForm = addCardFormElement.querySelector('.popup__form')

const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

editFormValidator.enableValidation(defaultConfig);
addFormValidator.enableValidation(defaultConfig);

const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const formEdit = editFormElement.querySelector('.popup__container');

const formAddCard = addCardFormElement.querySelector('.popup__container');
const cardTitleInput = formAddCard.querySelector('.popup__card-title');
const cardUrlInput = formAddCard.querySelector('.popup__card-url');

const profileEdit = document.querySelector('.profile__edit-button');
const editProfilePopupClose = editFormElement.querySelector('.popup__close-icon');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const addCardPopupClose = addCardFormElement.querySelector('.popup__close-icon');

const profileAddButton = document.querySelector('.profile__add-button');

const nameInput = formEdit.querySelector('.popup__profile-title');
const jobInput = formEdit.querySelector('.popup__profile-subtitle');

const placesList = document.querySelector('.elements');
const templateCard = document.querySelector('.template-card').content.querySelector(".elements__item");
const displayCardFormElement = document.querySelector('.popup_type_display-card');

const popupImage = displayCardFormElement.querySelector('.popup__card-image');;
const popupImageFigcaption = displayCardFormElement.querySelector('.popup__card-figcaption');
const popupImageClose = displayCardFormElement.querySelector('.popup__close-icon');

popupImageClose.addEventListener('click', () => {
    displayPopup(displayCardFormElement);
});

function displayPopup(modal) {
    if (!modal.classList.contains('popup_closed')) {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileSubtitle.textContent;
    }
    modal.classList.toggle('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    displayPopup(editFormElement);
}

editFormElement.addEventListener('submit', formSubmitHandler);

function addNewCard (evt) {
    evt.preventDefault();
    const curCard = new Card({name: cardTitleInput.value, link: cardUrlInput.value}, templateCard);
    placesList.prepend(curCard.createCard());

    displayPopup(addCardFormElement);
}

formAddCard.addEventListener('submit', addNewCard);

profileEdit.addEventListener('click', () => {
    displayPopup(editFormElement);
});

editProfilePopupClose.addEventListener('click', () => {
    displayPopup(editFormElement);
});

profileAddButton.addEventListener('click', () => {
    displayPopup(addCardFormElement)
})

addCardPopupClose.addEventListener('click', () => {
    displayPopup(addCardFormElement);
})

initialCards.forEach((data) => {
    renderCard(new Card(data, templateCard))
})

function renderCard(card) {
    placesList.prepend(card.createCard());
}

document.addEventListener( 'keydown', (e) => {
    if(e.key === 'Escape'){
        editFormElement.classList.remove('popup_opened')
        addCardFormElement.classList.remove('popup_opened')
        displayCardFormElement.classList.remove('popup_opened')
    }
})


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup')) {
        e.target.classList.remove('popup_opened');
    } else if(e.target.classList.contains('elements__image')) {
        const name = e.target.nextElementSibling.textContent.trim(),
            link = e.target.style.backgroundImage.split('"')[1];
        popupImage.setAttribute('src', link);
        popupImage.setAttribute('alt', name);
        popupImageFigcaption.textContent = name;
        displayPopup(displayCardFormElement);
    }
});
