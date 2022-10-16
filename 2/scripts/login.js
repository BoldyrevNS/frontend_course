
const formatEmail = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
const passwordFormat = '/^[A-Za-z]\\w{7,14}$'


function validateForm()
{
    let email=document.login.email.value;
    let password = document.login.password.value;

    let atposition=email.indexOf("@");
    let dotposition=email.lastIndexOf(".");

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length || email.match(formatEmail)){
        alert("Email введен некорректно");
        return false;
    }

    if (password.length<5 || password.match(passwordFormat)){
        alert("Пароль введен некорректно");
        return false;
    }

    window.location.href="http://localhost:63342/web/pages/index.html";
}