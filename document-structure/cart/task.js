const products = document.querySelectorAll('.product');
cart = document.querySelector('.cart__products');

products.forEach(elem => {
    let controls = elem.querySelector('.product__controls');
    controls.addEventListener('click', e => {
        let quantity = e.currentTarget.querySelector('.product__quantity-value');
        let value = Number(quantity.textContent);

        if (e.target.classList.contains('product__quantity-control_dec') && value !== 1) {
            value--;
            quantity.textContent = value;
        }
        if (e.target.classList.contains('product__quantity-control_inc')) {
            value++;
            quantity.textContent = value;
        }
        if (e.target.classList.contains('product__add')) {
            let srcImage = elem.querySelector('.product__image').getAttribute('src');
            let productsId = Array.from(cart.querySelectorAll('.cart__product'));
            let hasId = productsId.find(el => el.dataset.id === elem.dataset.id);

            if (hasId) {
                let cartValue = hasId.querySelector('.cart__product-count');
                cartValue.textContent = Number(cartValue.textContent) + value;
            } else {
                let setCartId = elem.dataset.id;
                cart.innerHTML += `
                <div class="cart__product" data-id="${setCartId}">
                    <img class="cart__product-image" src="${srcImage}">
                    <div class="cart__product-count"> ${quantity.textContent}</div>
                </div>
                `;
            }
        }
    });
});