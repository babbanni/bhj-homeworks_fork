const reveal = document.querySelector('.reveal');

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0) {
        reveal.classList.remove('reveal_active')
        return false
    }

    if (top > window.innerHeight) {
        reveal.classList.remove('reveal_active')
        return false
    }

    reveal.classList.add('reveal_active');
}

setInterval(() => isVisible(reveal), 0);