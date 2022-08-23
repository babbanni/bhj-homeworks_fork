let tabs = document.querySelectorAll('.tab');
let tab__content = document.querySelectorAll('.tab__content');


tabs.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.className === 'tab') {
            item.classList.toggle('tab_active');
        }
    })
})