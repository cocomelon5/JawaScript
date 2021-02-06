'use strict';
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredient = document.querySelector('#ingredients');

const aaa = ingredients.map(product => {
  const ingItem = document.createElement('li');
  ingItem.textContent = product;
  return ingItem;
});

ingredient.append(...aaa);
