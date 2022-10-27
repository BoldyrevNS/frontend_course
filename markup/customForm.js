// Обработчик события submit функцией checkForm для элемента customInfo
document.getElementById('customInfo').addEventListener("submit", checkForm);

function checkForm(event) {
    // Отключение перезагрузки страницы
    event.preventDefault();

    var el = document.getElementById('customInfo');
    var name = el.name.value;
    var email = el.email.value;
    var nameCount = wordCount(name);

    var fail="";
    if (name == "" || email == "")
        fail = "Заполните все поля";
    else if (nameCount < 3)
        fail = "Введите корректное имя (в форме ФИО)";

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    }
    else {
        alert("Все данные корректно заполнены");
        // Переход на начальную страницу
        window.location = 'index.html'
    }
}

function wordCount(str) {
    return str.split(' ').length;
}