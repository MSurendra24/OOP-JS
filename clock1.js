function updateClock() {
const now = new Date();
let hrs = now.getHours().toString();
let mins = now.getMinutes().toString();
let secs = now.getSeconds().toString();

document.getElementById('clock').textContent = `${hrs}:${mins}:${secs}`;
}

setInterval(updateClock, 1000);
updateClock();