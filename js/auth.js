const form = document.querySelector('.auth')
const login = document.querySelector('#InputLogin')
const password = document.querySelector('#InputPassword')
const loginField = document.querySelector('.loginField')
const passwordField = document.querySelector('.passwordField')
let error

const validateEmail = (email) => {
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return regex.test(email)
};

const validatePassword = (password) => {
    const regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    return regex.test(password)
};


form.addEventListener('submit', function (event) {
    if (error) {
        error.remove()
    }
    event.preventDefault()
    if (validateEmail(login.value) && validatePassword(password.value)) {
        document.location.href = "index.html"
    } else {
        if (!validateEmail(login.value)) {
            error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'Логин должен содержать адрес почту'
            loginField.insertAdjacentElement('beforeend', error);
        }
        if (!validatePassword(password.value)) {
            error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'Пароль должен содержать хотя бы одну цифру и специальный символ'
            passwordField.insertAdjacentElement('beforeend', error);
        }
    }
})