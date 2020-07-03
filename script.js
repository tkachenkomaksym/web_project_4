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

        displayPopup(evt)
    }

formElement.addEventListener('submit', formSubmitHandler);
profileEdit.addEventListener('click', displayPopup);
popupClose.addEventListener('click', displayPopup);

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

initialCards.forEach((data) => {
    renderCard(data)
})

function renderCard(card) {

    const placesList = document.querySelector('.elements');
    placesList.prepend(createCard(card));
}

function createCard(){
    const templateCard = document.querySelector('.template-card').content.querySelector(".elements__item");
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
        // openMo dal
    })

    return cardEntity;
}
