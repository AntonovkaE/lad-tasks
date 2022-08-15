const formElement = document.forms['formElement'];

formElement.addEventListener("focusin", (event) => event.target.classList.add('focused'));
formElement.addEventListener("focusout", (event) => event.target.classList.remove('focused'));

// formElement.onfocus = function(evt) {
//     var activeElement = formElement.querySelector('.focused');
// 	if (activeElement) {
// 	    activeElement.classList.remove('focused');
//     }
//     evt.target.classList.add('focused');
// };

// formElement.onblur = function(evt) {
// 	var activeElement = formElement.querySelector('.focused');
//     if (activeElement) {
//      	activeElement.classList.remove('focused');   
//     }
// };

