'use strict';
// -----1-----

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    let a = i + 1;
    console.log(`${a} - ${array[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//-----2-----

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(' ');
  const total = words.length * pricePerWord;
  return total;
};
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

//-----3-----
const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

//-----4-----
const formatString = function (string) {
  const maxLength = 40;
  const stringLength = string.length <= maxLength;
  if (stringLength) {
    return string;
  } else {
    return string.slice(0, 39) + '...';
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка
console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

//-----5-----

const checkForSpam = function (message) {
  const firstFindWord = 'sale';
  const secondFindWord = 'spam';
  message = message.toLowerCase();

  return message.includes(firstFindWord) || message.includes(secondFindWord);
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//-----6-----

let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt('Введите число');
  if (input === null) break;
  else if (isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else if (input !== '') {
    input = Number(input);
    numbers.push(input);
  }
}
if (numbers.length) {
  for (const num of numbers) {
    total += num;
  }
  alert(`Общая сумма чисел равна ${total}`);
} else {
  alert('Вы отменили операцию');
}
