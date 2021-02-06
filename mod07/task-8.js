'use strict';
{// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
}
const input = document.querySelector('#controls>input');
const fieldForDiv = document.querySelector('#boxes');
const cleaningBth = document.querySelector('[data-action="destroy"]');

input.addEventListener('blur', getCurrentValue);
cleaningBth.addEventListener('click', cleaning);

function getCurrentValue() {
  const amount = Number(this.value);
  const arrOfBox = createBoxes(amount);
  cleaning();
  fieldForDiv.append(...arrOfBox);
}
// debugger;
function createBoxes(amount) {
  const arrOfBox = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const a = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const c = Math.floor(Math.random() * 255);

    box.style.background = `rgb(${a},${b},${c})`;

    const w = 30 + 10 * i;
    const h = 30 + 10 * i;

    box.style.width = w + 'px';
    box.style.height = h + 'px';
    arrOfBox[i] = box;
  }
  return arrOfBox;
}
function cleaning() {
  fieldForDiv.innerHTML = '';
}
