// npm install -g ts-node

const str = 'str';

// tsc --init => tsconf.json

// одновременно запустить две команды - кампилятор ts и запуск полученного кода - ts-node файл.ts

// БАЗОВЫЕ ТИПЫ
// система типов - когда мы говорим сущности кем она должна быть

let userName: string = 'Serge';
// userName = 5; - ERROR

// строка - '', "", ``;

// числа - 10, 0.5, 0.0000001, -50, 4e10, NaN, infinity

// логическ тип - true, false

const isBirthday: boolean = true;
const age: number = 40;
const userName2: string = 'Serge';

if (isBirthday) {
  // 1 = (true)
  console.log(`Congrats ${userName2.toUpperCase()}, age: ${age + 1}`);
}

// ИСПОЛЬЗОВАНИЕ СИСТЕМЫ ТИПОВ В ФУНКЦИЯХ
const isBirthdayData: boolean = true;
const ageData: number = 20;
const userName3: string = 'Mary';
// "noImplicitAny": true,    config
function logBirthMsg(isBirthday: boolean, userName: string, age: number): void {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);

    // return undefined; - normal situation
  }
}
logBirthMsg(isBirthdayData, userName3, ageData);

// 2 way
function logBirthMsg2(
  isBirthday: boolean,
  userName: string,
  age: number
): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
}

logBirthMsg2(isBirthdayData, userName3, ageData);

// arrow func =>
const logBirthMsg3 = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
};

logBirthMsg3(isBirthdayData, userName3, ageData);

// СПЕЦИАЛЬНЫЙ ТИП ANY
// - TS Не может определить тип с каким будет работать - ЛУЧШЕ ЕГО ИЗБЕГАТЬ ПОЧТИ ВСЕГДА

// пример - данные приходят с JSON SERVER
const userData5 =
  '{"isBirthDayData": true, "ageData": 40, "userNameData": "Adel"}';

const userObj5: {
  isBirthDayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData5);

function logBirthMsg5(
  isBirthday: boolean,
  userName: string,
  age: number
): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
}

logBirthMsg5(isBirthdayData, userName3, ageData);

// ТИП NEVER - когда функция возвращается без возвращения значения в принципе - частый пример - возврат ошибок - рекурсии - бесконечные циклы

const createError = (msg: string) => {
  throw new Error(msg); // оператор throw выбрасывает ошибку и заканчивает код
  console.log(1); // unreadable code
};

function logBirthMsg6(
  isBirthday: boolean,
  userName: string,
  age: number
): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return createError('Error');
  }
}

logBirthMsg6(isBirthdayData, userName3, ageData);

// ещё как можно лучить never
const createError6 = (msg: string) => {
  while (true) {} // бесконечный цикл
};
