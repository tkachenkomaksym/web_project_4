export default class Card {
    constructor(data, templateCard) {
        this._data = data;
        this._templateCard = templateCard;
    }
    createCard() {
        const cardEntity = this._templateCard.cloneNode(true);
        const imageEntity = cardEntity.querySelector('.elements__image');
        const titleEntity = cardEntity.querySelector('.elements__title');
        const btnDeleteEntity = cardEntity.querySelector('.button_delete');
        const btnHeartEntity = cardEntity.querySelector('.button_heart');

        imageEntity.style.backgroundImage = `url(${this._data.link})`;
        titleEntity.textContent = this._data.name;

        btnDeleteEntity.addEventListener('click', () => {
            cardEntity.remove();
        })

        btnHeartEntity.addEventListener('click', () => {
            btnHeartEntity.classList.toggle('button_heart-clicked');
        })

        return cardEntity;
    }
}