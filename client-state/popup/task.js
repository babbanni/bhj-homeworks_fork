let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=closed';
});

if (!document.cookie.includes('modal=closed')) {
    modal.classList.add('modal_active');
}