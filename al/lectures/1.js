"use strict";
// проблемы js
// отсутствие type safety - нет проверки к корректности приведения типов
// не строгая типизация - те динамические типы
// autocomplete
// невозможность рефакторинга
// невозможность понять структуры данных
// o ts
// open source
// develop microsoft
// поддерж в любых фреймворках
// BASE
// npm i -g typescript - установка ts ГЛОБАЛЬНО НА КОМПЬЮТЕР
// tsc - ts компилятор
// tsc --init - создаем конфиг
const a = 1;
// tsc - компилируем наш код - js vesion our script
// ИСПОЛЬЗОВАНИЕ ТИПОВ
// BASE - NUMBER STRING BOOLEAN
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
//
let c = 'str';
let bool = false;
// TS В ФУНКЦИЯХ
// any - валидный тип обозначающий всё что угодно
// "noImplicitAny": false - меняем ts config
function getFullName(firstName, surname) {
    return `${firstName} ${surname}`;
}
console.log(getFullName('Serge', 'cHU'));
const getFullNameArrowFunc = (firstName, surname) => {
    return `${firstName} ${surname}`;
};
// ОБЪЕКТЫ
const user = {
    firstName: 'Serge',
    surname: 'Che',
    city: 'Minsk',
    age: 35,
    slills: {
        dev: true,
        devops: true,
    },
};
function getFullName2(user) {
    return `${user.firstName} ${user.surname}`;
}
console.log(getFullName2(user));
// МАССИВЫ
const skills = ['dev', 'coder', 'qa'];
// Any не желательно использовать
const skills2 = ['dev', 'coder', 999];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const res2 = skills
    .filter((s) => s !== 'qa')
    .map((s) => s + '! ')
    .reduce((a, b) => a + b);
console.log(res2); // dev! coder!
// TUPLES - КОРТЕЖИ - массив ограниченной длинны, где каждый элемент типизирован
const skill3 = [1, 'Dev'];
