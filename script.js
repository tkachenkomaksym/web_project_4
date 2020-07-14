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

const editFormElement = document.querySelector('.popup_type_edit-profile');
const formEdit = editFormElement.querySelector('.popup__container');

const addCardFormElement = document.querySelector('.popup_type_add-card');
const formAddCard = addCardFormElement.querySelector('.popup__container');

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

const addCardOpenModalButton = document.querySelector('.profile__add-button');
addCardOpenModalButton.addEventListener('click', () => {
})

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

profileEdit.addEventListener('click', () => {
    displayPopup(editFormElement);
});
editProfilePopupClose.addEventListener('click', () => {
    displayPopup(editFormElement);
});

addCardPopupClose.addEventListener('click', () => {
    displayPopup(addCardFormElement);
})

initialCards.forEach((data) => {
    renderCard(data)
})

function renderCard(card) {
    placesList.prepend(createCard(card));
}

function createCard(card){
    const cardEntity = templateCard.cloneNode(true);
    const imageEntity = cardEntity.querySelector('.elements__image');
    const titleEntity = cardEntity.querySelector('.elements__title');
    const btnDeleteEntity = cardEntity.querySelector('.button_delete');
    const btnHeartEntity = cardEntity.querySelector('.button_heart');

    imageEntity.style.backgroundImage = `url(${card.link})`;
    titleEntity.textContent = card.name;

    btnDeleteEntity.addEventListener('click', () => {
        // clickDeleteButtonHandler()
    })

    btnHeartEntity.addEventListener('click', () => {
        // clickLikeButtonHandler()
    })

    imageEntity.addEventListener('click', () => {
        // openModal
    })

    return cardEntity;
}

profileAddButton.addEventListener('click', () => {
    displayPopup(addCardFormElement)
})
