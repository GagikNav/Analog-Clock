const secHand = document.querySelector('[data-sec-hand]');
const minHand = document.querySelector('[data-min-hand]');
const hourHand = document.querySelector('[data-hour-hand]');
const body = document.querySelector('body');

// updating clock every 10 milliseconds for smooth rotation
setInterval(setClock, 10);

// calling clock on page load
setClock();

// Show Clock (bouncing down )
setTimeout(() => {
  body.style.transform = `translate(0)`;
}, 1000);

function setDate() {
  const d = new Date();
  const second = d.getSeconds();
  const minute = d.getMinutes();
  const hour = d.getHours();
  const millisecond = d.getMilliseconds();
  return { second, minute, hour, millisecond };
}

function setClock() {
  const secondRotation =
    setDate().second * 6 + (setDate().millisecond / 1000) * 6;
  const minRotation = setDate().minute * 6 + secondRotation / 60;
  const hourRotation = setDate().hour * (360 / 12) + minRotation / 12;
  secHand.style.transform = `rotate(${secondRotation}deg)`;
  minHand.style.transform = `rotate(${minRotation}deg)`;
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
}
