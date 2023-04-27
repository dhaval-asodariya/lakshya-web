var timer = new Date("April 29, 2023 15:30:30").getTime();

let day1 = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let second = document.getElementById("second");

let setTime = setInterval(function () {
  let now = new Date().getTime();

  let diff = timer - now;

  let day = Math.floor(diff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let sec = Math.floor((diff % (1000 * 60)) / 1000);

  //   console.log(day);
  //   console.log(hours);
  //   console.log(minutes);
  //   console.log(sec);

  day1.innerHTML = day;
  hour.innerHTML = hours;
  min.innerHTML = minutes;
  second.innerHTML = sec;

  if (diff < 0) {
    clearInterval();
  }
}, 1000);
