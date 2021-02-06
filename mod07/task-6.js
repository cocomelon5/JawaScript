'use strict';
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
const input = document.querySelector('#validation-input');

input.addEventListener('blur', validation);

// function validation(even) {
//   if (
//     even.currentTarget.value.length === Number(this.getAttribute('data-length'))
//   ) {
//     this.classList.add('valid');
//   } else {
//     this.classList.replace('valid', 'invalid');
//   }
// }

function validation(even) {
  const initialValue = Number(even.currentTarget.dataset.length);
  const entryValue = even.currentTarget.value.length;

  if (entryValue < initialValue) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else if (entryValue === initialValue) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else if (entryValue > initialValue) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
}
