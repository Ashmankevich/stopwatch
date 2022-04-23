const secElements = document.querySelector('.time');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');

let sec = 00;
let interval;

btnStart.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(getTimer, 1000);
});

btnStop.addEventListener('click', () => {
   clearInterval(interval);
});

btnReset.addEventListener('click', () => {
   clearInterval(interval);
   sec = "00";
   secElements.innerHTML = sec;
});

function getTimer() {
   sec++;
   if (sec < 10000) {
      secElements.innerHTML = " " + sec
   } else {
      sec = 0
      secElements.innerHTML = " " + sec
   };
};

