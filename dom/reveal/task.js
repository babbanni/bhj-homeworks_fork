const reveal = document.querySelector('.reveal');

function isVisible(el) {
    let coords = el.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    let topVisible = coords.top > 0 && coords.top < windowHeight;

    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {

    if (isVisible(reveal)) {
        reveal.classList.add('reveal_active');
    } else {
        reveal.classList.remove('reveal_active');
    }
}
window.addEventListener('scroll', showVisible);