"use strict";
// ПРИМИТИВНЫЕ ТИПЫ c LET
// numbers
let x = 10;
let x1 = 10.2;
// let x2 = 1234n;  - bigint
// let x2 = 1234.5n;  - error
let x3 = NaN; // number
// strings
let str1 = 'Hello world';
// явно не обязательно делать
let str2 = 'Hello Developer';
let str3;
str3 = 'Test string;';
// symbol
let symb = Symbol('as');
// boolean
let o = true;
let o1 = true;
o1 = false;
// nothing
let h = undefined;
let g = null;
// ! НО с const - literal - одно конкретное значение
const num4 = 110;
const str4 = 'test';
// universal any - ты будешь чем угодно - не желательно - можем использовать методы
let mn = 1;
mn = 'str';
mn = [];
mn.toUpperCase(); // можем не ошибка
// unknow - не можем использовать методы
let xx = 33;
// xx.toUpperCase(); - не можем ошибка
// решение этой проблемы - делаем уточнение - те доказываем что-то ts
let xx2 = 44;
if (typeof xx2 === 'string')
    xx2.toLowerCase();
// БАЗОВАЯ ТИПИЗАЦИЯ ФУНКЦИЙ
function sum(a, b) {
    return a + b;
}
sum(2, 10);
// arrow
const sum2 = (a, b) => a + b;
sum2(10, 10);
// func expr
const sum3 = function (a, b) {
    return a + b;
};
sum3(10, 10);
// когда функция ничего не возвращает - но она завершится
function log(name) {
    console.log('Hello', name);
}
// never - функц не доведет совю работу до конца - retern выполнен не будет
function crash() {
    throw new Error('crash');
}
// опциональность параметров - необязательный параметр - ?:  string or undefined
function log2(name, userId) {
    console.log('Hello', name, 'with ID', userId || 'anonym');
}
log2('Serge');
log2('Bob', '2222');
// ещё пример ...spread это всегда массив
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
const car = {
    wheel: 4,
    brand: 'BMV',
    type: 'Sedan',
    isNew: false,
};
// переопределение - строго по полям которые есть
car.brand = 'Porshe';
// для неизвестных значений можно их выделять
car['color'] = 'red';
// ОБЪЕКТЫ КАК ПАРАМЕТРЫ ФУНКЦИИ - есть отличия в сравнении с объектами - минимальный набор нам нужен { x: string; y: string }
function printPoint(point) {
    console.log(`Coord of the point is x: ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: '1',
    y: '2',
};
console.log(printPoint(obj1));
// с 3 элементами
const obj2 = {
    x: '1',
    y: '2',
    z: '4',
};
console.log(printPoint(obj2));
// 2 пример
function printName(user) {
    console.log('hello', user.firstName.toUpperCase());
    // что бы доказать что-то typescript нужна проверка
    if (user.lastName) {
        console.log('Nice to meet you', user.lastName.toUpperCase());
    }
}
// у нас здесь ? второй параметр
printName({ firstName: 'Serge' });
printName({ firstName: 'Serge', lastName: 'Che' });
// ТИПИЗАЦИЯ МАССИВОВ - желательно жесткость структуры, опциональность?
const arr = [1, 2, 3, 4, 5, true, 'test'];
const numbers = [1, 2, 3, 4, 5];
///
const strs = []; // чаще
const strs2 = []; // реже
// strs.push(1) error bcs string
const arrOfArr = []; // массив массивов [ [''], [''] ]
arrOfArr.push([''], ['']);
// func
function printArr(arr) {
    arr.forEach((el, ind, arr) => {
        console.log(el, ind, arr);
    });
}
// КОРТЕЖИ - массив C ОГРАНИЧЕННЫМ количеством элементов, содержат разный тип
const pairs = [
    ['key', 'value'],
    ['key2', 'value2'],
];
const data = [1, true, 'lodash'];
// csv
const doc = [];
doc.push(['Serge', 'Che', 2000, new Date(1985, 11, 3)]);
const xStat = 'loading'; // любое из значений будет доступно
// func
function printId(id) {
    if (typeof id === 'string') {
        // сужение типов
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// проверка на массив
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
        return 1;
    }
    else {
        console.log('Hello', person);
        return person;
    }
}
// ENUM
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
// myShape. // что-то похожее на число
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
