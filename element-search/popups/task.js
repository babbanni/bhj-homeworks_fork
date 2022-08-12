let modal_main = document.getElementById('modal_main');
let modal_success = document.getElementById('modal_success');
let modal__closeArray = Array.from(document.querySelectorAll('.modal__close'));
let show_success = document.querySelector('.show-success');

modal_main.className = 'modal modal_active';



for (let element of modal__closeArray) {
    element.onclick = function() {
        modal_main.className = 'modal';
    }
}

show_success.onclick = () => {
    modal_success.className = 'modal modal_active';
    for (let element of modal__closeArray) {
        element.onclick = function() {
            modal_success.className = 'modal';
            modal_main.className = 'modal';
        }
    }
}