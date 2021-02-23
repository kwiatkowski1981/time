import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');





// const d = document.querySelector('span.d');
// const h = document.querySelector('span.h');
// const m = document.querySelector('span.m');
// const s = document.querySelector('span.s');
//
//
// const endTime = new Date('2022-01-25 22:34:00').getTime();
//
// setInterval(() => {
//     const nowTime = new Date().getTime();
//     const time = endTime - nowTime;
//     console.log(time);
//     const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) %24);
//     const minutes = Math.floor((endTime / 1000 * 60 - nowTime / (1000 * 60)) %60);
//     const seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
//
// d.textContent = days;
// h.textContent = hours < 10 ?  '0' + hours : hours;
// m.textContent = minutes < 10 ?  '0' + minutes : minutes;
// s.textContent = seconds < 10 ?  '0' + seconds : seconds;
//
// }, 1000)




// const clock = () => {
//     const time = new Date();
//     console.log(time.toLocaleTimeString());
//
//     const seconds = time.getSeconds();
//     const minutes = time.getMinutes();
//     const hours = time.getHours();
//
//     document.querySelector('.clock span').textContent =
//         `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
// }
// setInterval(clock, 1000);

