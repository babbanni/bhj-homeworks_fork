let dead = document.getElementById('dead');
let deadCount = dead.textContent;
let lost = document.getElementById('lost');
let lostCount = lost.textContent;
let holeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of holeArray) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent = deadCount++;
        } else {
            lost.textContent = lostCount++;
        }
        if (lost.textContent == 5) {
            alert('Поражение!');
        } else if (dead.textContent == 10) {
            alert('Вы победили!');
        }

        if (lost.textContent == 5) {
            deadCount = 0;
            dead.textContent = deadCount;
            lostCount = 0;
            lost.textContent = lostCount;
        } else if (dead.textContent == 10) {
            deadCount = 0;
            dead.textContent = deadCount;
            lostCount = 0;
            lost.textContent = lostCount;
        }
    }
}