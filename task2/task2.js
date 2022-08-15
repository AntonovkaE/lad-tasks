const formElement = document.forms['formElement'];

formElement.addEventListener("focusin", (event) => event.target.classList.add('focused'));
formElement.addEventListener("focusout", (event) => event.target.classList.remove('focused'));

