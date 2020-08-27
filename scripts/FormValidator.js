class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector;
        this._inputelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _showErrorMessage(input, errorClass, inputErrorClass){
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(input){
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _checkInputValidation(input, rest){
        if (input.validity.valid) {
            hideErrorMessage(this._form, input, rest)
        } else {
            showErrorMessage(this._form, input, rest);
        }
    }

    _toggleButtonState(inputs, submitButton, {inactiveButtonClass}){
        const isValid = inputs.every((input) => input.validity.valid);

        if(isValid){
            submitButton.classList.remove(inactiveButtonClass)
        } else {
            submitButton.classList.add(inactiveButtonClass)
        }
    }

    enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}){
        const forms = Array.from(document.querySelectorAll(formSelector));

        forms.forEach((form) => {
            form.addEventListener('submit', ((e) => {
                e.preventDefault()
            }));

            const inputs = Array.from(form.querySelectorAll(inputSelector));
            const submitButton = form.querySelector(submitButtonSelector);

            inputs.forEach((input) => {
                input.addEventListener('input', () => {
                    checkInputValidation(form, input, rest);
                    toggleButtonState(inputs, submitButton, rest)
                })
            })
        })
    }


}


// export  default FormValidator;
