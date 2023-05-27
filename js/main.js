'use strict';

let userName = '', userAge = 0, userTel = '', userEmail = '';

function inputName( name ) {
    userName = name.trim();
    console.log('Пользователя Зовут:', name);
}

function send() {
    //Проверка Имени 
    if (userName.length < 2) {
        alert('В имени минимум 2 символа!');
    //Проверка Email
    } else if (userEmail.length < 5) {
        alert('В email минимум 5 символа!');
    } else if (userEmail.indexOf < 5) {
        alert('В email должен быть символ @!');
        //Возраст
        /*
    }else if () {*/
} else {
    alert('Спасибо!\nДанные отправлены');
}
}
