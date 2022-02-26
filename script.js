setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotations(secondHand, secondsRatio);
    setRotations(minuteHand, minuteRatio);
    setRotations(hourHand, hourRatio);
}

function setRotations(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();