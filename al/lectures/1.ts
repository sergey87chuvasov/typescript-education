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

let revenue: number = 1000;
let bonus: number = 500;
let res: number = revenue + bonus;
console.log(res);

//
let c: string = 'str';
let bool: boolean = false;

// TS В ФУНКЦИЯХ
// any - валидный тип обозначающий всё что угодно
// "noImplicitAny": false - меняем ts config
function getFullName(firstName: string, surname: string): string {
  return `${firstName} ${surname}`;
}

console.log(getFullName('Serge', 'cHU'));

const getFullNameArrowFunc = (firstName: string, surname: string): string => {
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

function getFullName2(user: { firstName: string; surname: string }): string {
  return `${user.firstName} ${user.surname}`;
}

console.log(getFullName2(user));
