const product = document.querySelectorAll('.product');
const quantityControl = document.querySelectorAll('.product__quantity-control');
const btns = document.querySelectorAll('.product__add');
let cartProducts = document.querySelector('.cart__products');
let productInCart = document.createElement('div');

quantityControl.forEach(elem => {
    elem.addEventListener('click', () => {
        if (elem.className.includes('product__quantity-control_dec')) {
            let count = elem.parentElement.children[1].innerText;
            count = +count;
            if (count === 1) {
                return
            } else {
                count--;
                elem.parentElement.children[1].innerText = `${count}`;
            }
        } else {
            let count = elem.parentElement.children[1].innerText;
            count = +count;
            count++;
            elem.parentElement.children[1].innerText = `${count}`;
        }
    });
});

btns.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();

        cartProducts.appendChild(productInCart);
        cartProducts.lastElementChild.outerHTML = `
        <div class="cart__product" data-id="${elem.closest('.product').dataset.id}">
            <img class="cart__product-image" src="${elem.closest('.product').children[1].src}">
            <div class="cart__product-count">${elem.parentElement.children[1].innerText}</div>
        </div>`

    })
})