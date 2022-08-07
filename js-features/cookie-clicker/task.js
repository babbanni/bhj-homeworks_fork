let clicker__counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let countCookie = clicker__counter.textContent;
let clicker__speed = document.getElementById('clicker__speed');
let dateBefore;
let dateBefore2;
let speedClick;
cookie.onclick = function() {
    clicker__counter.textContent = countCookie++;

    if (countCookie % 2 === 0) {
        dateBefore = new Date();
        cookie.width /= 1.5;
        cookie.height /= 1.5;
        speedClick = (1 / (dateBefore - dateBefore2)) * 1000;
    } else {
        dateBefore2 = new Date();
        cookie.width *= 1.5;
        cookie.height *= 1.5;
        speedClick = (1 / (dateBefore2 - dateBefore)) * 1000;
    }
    clicker__speed.textContent = `\n Скорость клика: ${speedClick.toFixed(2)}`;
}