const btn = document.querySelector('.btn');
const login = document.getElementsByName('login');
const password = document.getElementsByName('password');
const welcome = document.querySelector('.welcome');
const xhr = new XMLHttpRequest();
const url = 'https://netology-slow-rest.herokuapp.com/auth.php';

btn.addEventListener('click', () => {
    xhr.open('POST', url, true);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {

        } else {
            alert('Неправильный пароль или логин');
        }
    });
});