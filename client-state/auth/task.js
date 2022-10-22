const btn = document.getElementById('signin__btn');
const welcome = document.querySelector('.welcome');
const form = document.getElementById('signin__form');
const signin = document.querySelector('.signin');

if (localStorage.user_id) {
    welcome.children.user_id.textContent = localStorage.user_id;
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}
btn.addEventListener('click', e => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', false);

    let login = form.children[0].firstElementChild.value;
    let password = form.children[1].firstElementChild.value;
    let formData = new FormData;

    formData.append('login', login);
    formData.append('password', password);
    xhr.send(formData);

    let response = JSON.parse(xhr.responseText);

    if (response.success) {
        localStorage.setItem('user_id', `${response.user_id}`);
        welcome.children.user_id.textContent = response.user_id;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    } else {
        alert('Неверный логин/пароль');
    }
});