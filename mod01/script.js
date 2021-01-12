'use strict';
// -----1-----
const good = 'Генератор защитного поля';
var goodsPrice = 1000;
var text = `Выбран ${good}, цена за штуку ${goodsPrice} кредитов`;
console.log(text);
var goodsPrice = 2000;
var text = `Выбран ${good}, цена за штуку ${goodsPrice} кредитов`;
console.log(text);

//-----2-----
const total1 = 100;
const ordered = 50;
let message;

if (ordered>total1) { message = 'На складе недостаточно твоаров!'}
else { message = 'Заказ оформлен, с вами свяжется менеджер'}
console.log(message);

//-----3-----
const ADMIN_PASSWORD = 'jqueryismyjam';
let message1;
let askPassword = prompt('Введите ваш пароль');
if (askPassword === null) {message1 = 'Отменено пользователем!'}
else if (ADMIN_PASSWORD === askPassword) {message1 = 'Добро пожаловать!'}
else {message1 = 'Доступ запрещен, неверный пароль!'}
alert(message1);

//-----4-----
let credits = 23580;
const pricePerDroid = 3000;
let message2;
let quantityOfDroids = prompt('Сколько дроидов вы хотите купить?');
quantityOfDroids = Number(quantityOfDroids);
let totalPrice = pricePerDroid*quantityOfDroids;
credits = credits-totalPrice;

if (quantityOfDroids === 0) {message2 = 'Отменено пользователем!'}
else if (totalPrice>credits) {message2 = 'Недостаточно средств на счету!'}
else {message2 = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits} кредитов.`};

console.log(message2);

// -----5-----
const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';

let country = prompt('Укажите вашу страну');
country = country.toLowerCase();

let price;

switch (country) {
case CHINA:
price = "100 кредитов";
console.log(`Доставка в ${country} будет стоить ${price}`);
break;
case CHILE:
price = "250 кредитов";
console.log(`Доставка в ${country} будет стоить ${price}`);
break;
case AUSTRALIA:
price = "170 кредитов";
console.log(`Доставка в ${country} будет стоить ${price}`);
break;
case INDIA:
price = "80 кредитов";
console.log(`Доставка в ${country} будет стоить ${price}`);
break;
case JAMAICA:
price = "120 кредитов";
console.log(`Доставка в ${country} будет стоить ${price}`);
  break;

default:
alert("В вашей стране доставка не доступна");
}


//-----6-----
let input = prompt('Веедите число');
let total = 0;
do {total= total + Number(input), input = prompt('Веедите число')}
while (input !== null);
alert(`Общая сумма чисел равна ${total}`);