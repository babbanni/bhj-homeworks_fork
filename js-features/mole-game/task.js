let dead = document.getElementById('dead');
let deadCount = dead.textContent;
let lost = document.getElementById('lost');
let lostCount = lost.textContent;
let hole = getHole(1);

hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
        deadCount++;
    } else {
        lostCount++;
    }
}

if (lostCount == 5) {
    alert('Поражение!');
} else if (deadCount == 10) {
    alert('Вы победили!');
}