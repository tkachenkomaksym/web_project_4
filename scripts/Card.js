class Card {
    constructor(displayPopup, displayCardFormElement, popupImage, popupImageFigcaption) {
        this._displayPopup = displayPopup;
        this._templateCard = document.querySelector('.template-card').content.querySelector(".elements__item");
        this._displayCardFormElement = displayCardFormElement;
        this._popupImage = displayCardFormElement.querySelector('.popup__card-image');;
        this._popupImageFigcaption = popupImageFigcaption;
        
        const popupImageClose = displayCardFormElement.querySelector('.popup__close-icon');

        popupImageClose.addEventListener('click', () => {
            displayPopup(displayCardFormElement);
        });

    }

    createCard(data){
        const cardEntity = this._templateCard.cloneNode(true);
        const imageEntity = cardEntity.querySelector('.elements__image');
        const titleEntity = cardEntity.querySelector('.elements__title');
        const btnDeleteEntity = cardEntity.querySelector('.button_delete');
        const btnHeartEntity = cardEntity.querySelector('.button_heart');

        imageEntity.style.backgroundImage = `url(${data.link})`;
        titleEntity.textContent = data.name;

        btnDeleteEntity.addEventListener('click', () => {
            cardEntity.remove();
        })

        btnHeartEntity.addEventListener('click', () => {
            btnHeartEntity.classList.toggle('button_heart-clicked');
        })

        imageEntity.addEventListener('click', () => {
            this._popupImage.setAttribute('src', data.link);
            this._popupImage.setAttribute('alt', data.name);
            this._popupImageFigcaption.textContent = data.name;
            this._displayPopup(this._displayCardFormElement)
        })
        return cardEntity;
    }
}