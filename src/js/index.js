import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const clock = () => {
    const time = new Date();
    console.log(time.toLocaleTimeString());

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    document.querySelector('.clock span').textContent =
        `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
setInterval(clock, 1000);

