const newYears = '01 Jan 2022'

const dayE1 = document.getElementById('days')
const hourE1 = document.getElementById('hours')
const minE1 = document.getElementById('mins')
const secE1 = document.getElementById('secs')

function countDown(){

    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond/3600) % 24;
    const mins = Math.floor(totalSecond/60) % 60;
    const secs = Math.floor(totalSecond)%60;

    dayE1.innerHTML = days;
    hourE1.innerHTML = hours;
    minE1.innerHTML = mins;
    secE1.innerHTML = secs;
}
countDown();

setInterval(countDown,1000)