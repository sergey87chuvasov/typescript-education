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

// МАССИВЫ
const skills: string[] = ['dev', 'coder', 'qa'];

// Any не желательно использовать
const skills2: any[] = ['dev', 'coder', 999];

for (const skill of skills) {
  console.log(skill.toUpperCase());
}

const res2 = skills
  .filter((s: string) => s !== 'qa')
  .map((s) => s + '! ')
  .reduce((a, b) => a + b);
console.log(res2); // dev! coder!

// TUPLES - КОРТЕЖИ - массив ограниченной длинны, где каждый элемент типизирован
const skill3: [number, string] = [1, 'Dev'];
const id = skill3[0];
const name3 = skill3[1];

// деструктур
const [newId, skill3Name] = skill3;

// spread
const skill4: [number, string, ...boolean[]] = [1, 'Dev', true, true, true];

// READONLY - доп. модификатор - говорит нам что что-то не модифицируется
let a2 = 5;
a2 = 6;

const skill5: readonly [number, string] = [1, 'Dev'];
// skill5[0] = 999; error

// alt ver. readonly -  - массив строк
const skills6: Array<string> = ['qa', 'ux'];
const skills7: ReadonlyArray<string> = ['qa', 'ux'];
// skills7.push('sss') - error
