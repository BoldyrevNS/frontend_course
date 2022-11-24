let form =  document.querySelector('.login-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPassword = document.querySelector('.js-input-password'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

function validatePassword(password) {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return reg.test(String(password));
}



form.onsubmit = function () {
    let emailVal = inputEmail.value,
        passwordVal = inputPassword.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '')

    formInputs.forEach(function (input){
        if (input.value ===''){
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if(emptyInputs.length !== 0){
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)){
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if(!validatePassword(passwordVal)){
        console.log('password not valid');
        inputPassword.classList.add('error');
        return false;
    } else {
        inputPassword.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('check-error');
        return false;
    } else {
        inputCheckbox.classList.remove('check-error');
    }

}
