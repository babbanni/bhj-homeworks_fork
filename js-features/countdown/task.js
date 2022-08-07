let timerElement = document.getElementById('timer');
let hh = 00;
let mm = 00;
let ss = 19;

let timerInterval = setInterval(() => {
    if (hh == 0 && mm == 0 && ss == 0) {
        alert('Вы победили в конкурсе!');
        return clearInterval(timerInterval);
    } else if (ss == 0) {
        mm--;
        ss = 59;
        if (mm == 0 && hh != 0) {
            hh--;
            mm = 59;
        }
    } else {
        ss--;
    }
    timerElement.textContent = `${hh}:${mm}:${ss}`
}, 1000);