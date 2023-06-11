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
