'use strict';

const counter = document.querySelector('#counter');
// console.log(counter);
const btnInc = counter.querySelector('button[data-action="increment"]');
const btnDec = counter.querySelector('button[data-action="decrement"]');

const currentValue = counter.querySelector('#value');
let initialValue = 0;
// console.log(initialValue);

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);

function increment() {
  initialValue += 1;
  currentValue.textContent = initialValue;
}
function decrement() {
  initialValue -= 1;
  currentValue.textContent = initialValue;
}
