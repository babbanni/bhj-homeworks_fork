menuLink = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', (e) => {
        let hasSub = menuLink[i].nextElementSibling;
        if (hasSub !== null) {
            e.preventDefault();
            if (hasSub.className.includes('menu_sub')) {
                hasSub.classList.toggle('menu_active');
            }
        }
    });
}