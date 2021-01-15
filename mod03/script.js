'use strict';

//-----1-----
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// добавляет поле mood со значением 'happy'
user.mood = 'happy';
console.table(user);
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
user.hobby = 'skydiving';
user.premium = false;
console.table(user);
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const items = Object.keys(user);
console.log(items);
for (const item of items) {
  console.log(`${item} : ${user[item]}`);
}

//----2-----

// Напиши функцию countProps(obj),
// считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function (obj) {
  const addingObject = Object.entries(obj);
  // console.log(addingObject);
  const Length = addingObject.length;
  return Length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//-----3-----

// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого продуктивного
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
  let max = 0;
  let name;

  const keys = Object.keys(employees);

  for (const key of keys) {
    if (max < employees[key]) {
      max = employees[key];
      name = key;
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

//-----4-----
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function (employees1) {
  let total = 0;
  const salaryValues = Object.values(employees1);
  for (const value of salaryValues) {
    total += value;
  }
  return total;
};

console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

//-----5-----
// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const combined = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let key in arr[i]) {
      if (key === prop) {
        combined.push(arr[i][key]);
      }
    }
  }
  return combined;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []
//-----6-----
// Напиши функцию calculateTotalPrice(allGoods, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

const goods = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allGoods, productName) {
  let goodsPrice = 0;
  let goodsGuantity = 0;

  for (const item1 of allGoods) {
    if (item1.name === productName) {
      goodsPrice = item1.price;
      goodsGuantity = item1.quantity;
    }
  }
  const totalCost = goodsPrice * goodsGuantity;
  return totalCost;
};
console.log(calculateTotalPrice(goods, 'Радар')); // 5200
console.log(calculateTotalPrice(goods, 'Дроид')); // 2800
