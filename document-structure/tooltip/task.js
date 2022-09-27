const tooltipHas = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');

tooltipHas.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        elem.appendChild(tooltip);

        elem.firstElementChild.outerHTML = `
        <div class="tooltip" style="left: 0; top: 0">
            ${elem.title}
        </div>`;
        if (elem.firstElementChild.className.includes('tooltip_active')) {
            debugger
            elem.firstElementChild.remove();
        } else {
            elem.firstElementChild.className = 'tooltip_active';
        }
    });
});