let dropdown__value = document.querySelectorAll('.dropdown__value');
let dropdown__item = document.querySelectorAll('.dropdown__item');

let changeValue = (currentValue) => {
    itemTarget = (currentTarget) => {
        currentValue.textContent = currentTarget.textContent;
        currentValue.click();
    }
}

dropdown__value.forEach((value) => {
    value.addEventListener('click', () => {
        value.nextElementSibling.classList.toggle('dropdown__list_active');
        changeValue(value);
    });
});

dropdown__item.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        itemTarget(e.currentTarget);
    });
});