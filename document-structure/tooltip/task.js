const tooltipHas = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');

tooltipHas.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        elem.appendChild(tooltip);

        if (elem.childElementCount > 1) {
            elem.lastElementChild.remove();
        }

        if (elem.firstElementChild.className.includes('tooltip_active')) {
            elem.firstElementChild.classList.remove('tooltip_active');
        } else {
            elem.firstElementChild.outerHTML = `
        <div class="tooltip" style="left: auto; top: auto">
            ${elem.title}
        </div>`;
            elem.firstElementChild.classList.add('tooltip_active');
        }
    });
});