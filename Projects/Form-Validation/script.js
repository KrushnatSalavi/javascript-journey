var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')
//
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

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "phone number is required "
        return false
    }

    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = "email  is required "
        return false
    }

   if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Email is invalid!";
    return false;
}
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validateMessage() {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'More character requre'
        return false
    }

    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please Fill every field'
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false;
    }
}