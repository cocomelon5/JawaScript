'use strict';
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.setAttribute('max', 64);
input.setAttribute('min', 8);
input.setAttribute('step', 2);
input.setAttribute('value', 16);

input.addEventListener('input', function () {
  const size = input.value;
  text.style.fontSize = size + 'px';
});
