'use strict';
// -----1-----
/*/апиши функцию-конструктор Account, 
которая создает объект со свойствами login и email. 
В prototype функции-конструктора добавь метод getInfo(), 
который выводит в консоль значения полей login и email объекта который его вызвал.*/
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   console.log(`login: ${this.login}, email: ${this.email}`);
// };
// console.log(typeof Account.prototype.getInfo); // function

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// -----2-----
/*Напиши класс User для создания пользователя со следующим свойствами:
name - строка
age - число
followers - число
Добавь метод getInfo(), который, выводит строку: 
User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers*/

// class User {
//   constructor({ name, age, followers }) {
//     this._name = name;
//     this._age = age;
//     this._followers = followers;
//   }
//   // getInfo() {
//   //   console.log(
//   //     `User ${this._name} is ${this._age} years old and has ${this._followers} followers`,
//   //   );
//   // }
// }
// User.prototype.getInfo = function () {
//   console.log(
//     `User ${this._name} is ${this._age} years old and has ${this._followers} followers`,
//   );
// };
// const mango1 = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });
// mango1.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly1 = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });
// poly1.getInfo(); // User Poly is 3 years old and has 17 followers

//-----3-----
/*Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
При вызове будет получать один аргумент - начальный массив товаров, 
и записывать его в свойство items.

Добавь методы класса:
getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получет товар и, если он есть, удаляет его из текущих*/
// class Storage {
//   constructor(items) {
//     this._items = items;
//   }
//   getItems() {
//     return this._items;
//   }
//   addItem(item) {
//     this._items = [...this._items, item];
//   }
//   removeItem(item) {
//     const itemsN = [];
//     for (let i = 0; i < this._items.length; i += 1) {
//       if (this._items[i] !== item) {
//         itemsN.push(this._items[i]);
//       }
//     }
//     this._items = itemsN;
//   }
// }
// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage._items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
// console.table(storage._items);
// storage.removeItem('Пролонгер');
// console.table(storage._items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//-----4-----
/*Напиши класс StringBuilder. 
На вход он получает один параметр - строку, 
которую записывает в свойство _value.

Добавь классу следующий функционал:
Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value*/
// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value += str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

//-----5-----
//Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(maxSpeed, speed, isOn, distance, price);
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.distance = distance;
    this.isOn = isOn;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get pricE() {
    return this.price;
  }
  set pricE(value) {
    this.price = value;
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.pricE); // 2000
mustang.pricE = 4000;
console.log(mustang.pricE); // 4000
