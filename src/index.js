const secElements = document.querySelector('.time__sec')
const minElements = document.querySelector('.time__min')
const hourElements = document.querySelector('.time__hour')
const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnReset = document.getElementById('reset')

let sec = 00
let hours = 00
let minutes = 00
let interval

btnStart.addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(getStopWatch, 1000)
});

btnStop.addEventListener('click', () => {
   clearInterval(interval)
});

btnReset.addEventListener('click', () => {
   clearInterval(interval)
   sec = 00
   secElements.innerHTML = "0" + sec
   minutes = 00
   minElements.innerHTML = "0" + minutes
   hours = 00
   hourElements.innerHTML = "0" + hours
});

function getStopWatch() {
   sec++
   if (sec < 10) {
      secElements.innerHTML = "0" + sec
   }
   if (sec > 9) {
      secElements.innerHTML = sec
   }
   if (sec > 59) {
      minutes++
      minElements.innerHTML = "0" + minutes
      sec = 0
      secElements.innerHTML = "0" + sec
   }

   if (minutes < 10) {
      minElements.innerHTML = "0" + minutes
   }
   if (minutes > 9) {
      minElements.innerHTML = minutes
   }
   if (minutes > 59) {
      hours++
      hourElements.innerHTML = "0" + hours
      minutes = 0
      minElements.innerHTML = "0" + minutes
   }

   if (hours < 10) {
      hourElements.innerHTML = "0" + hours
   }
   if (hours > 10) {
      hourElements.innerHTML = hours
   }
   if (hours > 99) {
      hours = 0
      hourElements.innerHTML = "0" + hours
      minutes = 0
      minElements.innerHTML = "0" + minutes
      sec = 0
      secElements.innerHTML = "0" + sec
   }
}

