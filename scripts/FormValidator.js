export default class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector;
        this._inputelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _showErrorMessage(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        if(!error) return false;

        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        if(!error) return false;

        error.textContent = '';
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _checkInputValidation(input, rest) {
        if (input.validity.valid) {
            this._hideErrorMessage(input)
        } else {
            this._showErrorMessage(input);
        }
    }

    _toggleButtonState(inputs, submitButton, {inactiveButtonClass}) {
        const isValid = inputs.every((input) => input.validity.valid);

        if(isValid) {
            submitButton.classList.remove(inactiveButtonClass)
        } else {
            submitButton.classList.add(inactiveButtonClass)
        }
    }

    enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
        const forms = Array.from(document.querySelectorAll(formSelector));

        forms.forEach((form) => {
            form.addEventListener('submit', ((e) => {
                e.preventDefault()
            }));

            const inputs = Array.from(form.querySelectorAll(inputSelector));
            const submitButton = form.querySelector(submitButtonSelector);

            inputs.forEach((input) => {
                input.addEventListener('input', () => {
                    this._checkInputValidation(input, rest);
                    this._toggleButtonState(inputs, submitButton, rest)
                })
            })
        })
    }
}