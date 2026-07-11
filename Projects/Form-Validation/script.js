var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Full name required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = " Write Full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = "phone number is required "
        return false
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = "phone number should be 10 digit"
        return false
    }

    if (phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "phone number is required "
        return false
    }

    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailErrorError.innerHTML = "email  is required "
        return false
    }

    if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailErrorError.innerHTML = "email  is invalid ! "
        return false
    }

    emailErrorError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;

}