const showErrorMessage = (form, input, {errorClass, inputErrorClass, ...rest}) => {
    const error = form.querySelector(`#${input.id}-error`);

    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

const hideErrorMessage = (form, input, {errorClass, inputErrorClass, ...rest}) => {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);

}
const checkInputValidation = (form, input, rest) => {
    if (input.validity.valid) {
        hideErrorMessage(form, input, rest)
    } else {
        showErrorMessage(form, input, rest);
    }
}

const toggleButtonState = (inputs, submitButton, {inactiveButtonClass}) => {
    const isValid = inputs.every((input) => input.validity.valid);

    if(isValid){
        submitButton.classList.remove(inactiveButtonClass)
    } else {
        submitButton.classList.add(inactiveButtonClass)
    }
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...rest}) => {
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

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
});