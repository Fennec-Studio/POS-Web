// js para cambiar estilos y hacer animaciones
// vars inputs
var emailIcon = document.getElementById('emailIcon');
var emailDiv = document.getElementById('emailDiv');
var txtEmail = document.getElementById('txtEmail');
var passIcon = document.getElementById('passIcon');
var passDiv = document.getElementById('passDiv');
var txtPass = document.getElementById('txtPass');

function emailFocus() {
    if (txtEmail == document.activeElement) {
        emailIcon.classList.remove('text-gray-300')
        emailDiv.classList.remove('bg-gray-300');
        emailIcon.classList.add('text-green-300');
        emailDiv.classList.add('bg-green-300');
    } else {
        emailIcon.classList.remove('text-green-300');
        emailDiv.classList.remove('bg-green-300');
        emailIcon.classList.add('text-gray-300');
        emailDiv.classList.add('bg-gray-300');
    }
}
function emailNotFocus() {
    if (txtEmail !== document.activeElement) {
        emailIcon.classList.remove('text-green-300');
        emailDiv.classList.remove('bg-green-300');
        emailIcon.classList.add('text-gray-300');
        emailDiv.classList.add('bg-gray-300');
    } else {
        emailIcon.classList.remove('text-gray-300')
        emailDiv.classList.remove('bg-gray-300');
        emailIcon.classList.add('text-green-300');
        emailDiv.classList.add('bg-green-300');
    }
}

function passFocus() {
    if (txtPass == document.activeElement) {
        passIcon.classList.remove('text-gray-300')
        passDiv.classList.remove('bg-gray-300');
        passIcon.classList.add('text-green-300');
        passDiv.classList.add('bg-green-300');
    } else {
        passIcon.classList.remove('text-green-300');
        passDiv.classList.remove('bg-green-300');
        passIcon.classList.add('text-gray-300');
        passDiv.classList.add('bg-gray-300');
    }
}
function passNotFocus() {
    if (txtPass !== document.activeElement) {
        passIcon.classList.remove('text-green-300');
        passDiv.classList.remove('bg-green-300');
        passIcon.classList.add('text-gray-300');
        passDiv.classList.add('bg-gray-300');
    } else {
        passIcon.classList.remove('text-gray-300')
        passDiv.classList.remove('bg-gray-300');
        passIcon.classList.add('text-green-300');
        passDiv.classList.add('bg-green-300');
    }
}

txtPass.addEventListener('focusin', passFocus);
txtPass.addEventListener('focusout', passNotFocus);

txtEmail.addEventListener('focusin', emailFocus);
txtEmail.addEventListener('focusout', emailNotFocus);

