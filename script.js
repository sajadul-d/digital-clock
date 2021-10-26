function digitalClock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clockFormat = 'AM';

    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
        clockFormat = 'PM';
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // hours = hours < 10 ? '0' + hours : hours;
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // seconds = seconds < 10 ? '0' + seconds : seconds;

    let finalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.getElementById('small').innerText = clockFormat;

    setInterval(digitalClock, 1000);
}

digitalClock();