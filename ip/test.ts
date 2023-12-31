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


// ТИПЫ NULL и UNDEFINED
const test5: null = null;
const test6: any = null; // частный случай any

// ошибки
// const test7: string = null; // error
// const test7: number = null; // error

function getRndData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return '   Some data  ';
  }
}

const data5 = getRndData();
const trimData = data5 ? data5.trim() : null;

// und
const test8: undefined = undefined;
const test9: any = undefined;
// const test10: string = undefined;

let smth; // any


// РЕДДКИЕ ТИПЫ BIGINT И symbol
let id: symbol = Symbol('id');

const data8 = {
  [id]: 1
}
console.log(data8[id]);

// const num1: bigint = 1n;
// const num2: bigint = 2n;
// console.log(num1 + num2);


// ТИПИЗИЦИЯ ОБЪЕКТОВ И ДЕСТРУКТУРИЗАЦИЯ
const userData7 = {
  isBirthdayData: true,
  ageData: 40,
  userName3: 'Serge',
}

const createError7 = (msg: string) => {
  throw new Error(msg); 
};

function logBirthMsg7({isBirthdayData, userName3, ageData }: {isBirthdayData: boolean, userName3: string, ageData: number}): string {
  if (isBirthdayData) {
    return `Congrats ${userName3.toUpperCase()}, age: ${ageData + 1}`;
  } else  {
    return createError7('Error');
  }
}

console.log(logBirthMsg7(userData7));

// ТИПИЗАЦИЯ МАССИВОВ

const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];
// departments.push(5); // error

const report = departments.filter(d => d !== 'dev').map(d => `${d} - done`)


const nums10: number[] = [10,12,14,44];
const nums11: any[] = [1,4,7, true, 'test'];
const nums12: number[][] = [[3,5,6], [3,5,8]];

// destruct
const [first] = report;
console.log(first);


// КОРТЕЖИ - TUPPLE - записываем набор данных в строго определенныом порядке и нужных типов

const userData8 = {
  isBirthdayData: true,
  ageData: 40,
  userName3: 'Serge',
}

const userDataTuple: [boolean, number, string] = [true, 40, 'Serge'];


// UNION ОБЪЕДИНЕНИЕ ТИПОВ - из нескольких простых типов
const message: string | number = 5; // или один тип или другой
const messages: string[] | number[] = ['a', 'b'] // строго один тип в массиве 

function printMsg2 (msg: string | number): void {
  console.log(msg)
}

printMsg2(4);
printMsg2('hello');

// СУЖЕНИЕ ТИПОВ - NARROWING

function printMsg3 (msg: string | number): void {

  // делаем механизм
  if (typeof msg === 'string') {
    console.log(msg.toLowerCase());
  } else {
    console.log(msg.toExponential());
  }
  
  // вне механизма
  console.log(msg)
}

printMsg3(4);
printMsg3('hello');


// 2 option
function printMsg4 (msg: string[] | number | boolean): void {

  // делаем механизм
  if (Array.isArray(msg)) {
    msg.forEach(m => console.log(m))
  } else if (typeof msg === 'number'){
    console.log(msg.toFixed());
  } else {
    console.log(msg)
  }
  
  // вне механизма
  console.log(msg)
}

printMsg4(4);

// next example
const printReadings = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b)
  }
}

const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0,3))
}

//
const checkReadings = (readings: {system: number} | {user: number}): void => {
  if ('system' in readings) {
    console.log(readings.system)
  } else {
    console.log(readings.user)
  }
}

function logValue (x: string | Date) {
  if(x instanceof Date) {
    console.log(x.getDay())
  } else {

    console.log(x.includes('e'))
  }
}

// ПРИМИТИВНЫЕ ЛИТЕРАЛЬНЫЕ ТИПЫ
let msg: 'Hello' = 'Hello';
msg = 'Hello'; // ЭТО И ЕСТЬ литеральный тип - четкая переменная - это просто значение котрое мы с вами 
// устанавливаем для чего либо и строго ему соответствуем

//
const port3000: number = 3000;
const port3001: number = 3001;

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
  if(port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`)
  } else {
    console.error('invalid port')
  }
  
  return 'Server started'
}
startServer('https', 3001); // Server started on https:// server: 3001

//

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number;

function createAnimation(id: AnimationID , animationName: string, 
  timingFunc: AnimationTimingFunc = 'ease',
  duration: number, iterCount: 'infinite' | number
  ): void {
  // const elem = document.querySelector(`${id}`) as HTMLElement;

  // if(elem) {
    console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
    // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
  // }
  
}

createAnimation('id','fade','ease-in',6,'infinite'); // fade ease-in 6 infinite

// ПСЕВДОНИМЫ ТИПОВ - TYPE ALIASES
// type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
// timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease' = AnimationTimingFunc


// ОБЪЕКТНЫЕ ЛИТЕРАЛЫ И АННОТАЦИИ ФУНКЦИЙ

const serverConfig2: {protocol: 'http' | 'https'; port: 3000 | 3001} = {
  protocol: 'https',
  port: 3001,
}

// нужно уметь различать аннотацию функции от ее объявления
const startServer2: (protocol: 'http' | 'https', port: 3000 | 3001) => string 
= (protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' => {
  
    console.log(`Server started on ${protocol}://server:${port}`)
  
  return 'Server started'
}
startServer2(serverConfig2.protocol, serverConfig2.port); // Server started on https:// server: 3001

//

type AnimationTimingFunc2 = 'ease' | 'ease-out' | 'ease-in';
type AnimationID2 = string | number;

function createAnimation2(id: AnimationID2 , animationName: string, 
  timingFunc: AnimationTimingFunc2 = 'ease',
  duration: number, iterCount: 'infinite' | number
  ): void {
  // const elem = document.querySelector(`${id}`) as HTMLElement;

  // if(elem) {
    console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
    // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
  // }
  
}

createAnimation2('id','fade','ease-in',6,'infinite'); // fade ease-in 6 infinite

// ТЕСТ

// 1-  тип never можно получить если - функция никогда не заканчивается возвращаемым значением

/* 2- 
Какая ошибка допущена в этом коде?
let salary;
salary = 40000;
ответ: salary имеет тип any даже после присвоения значения
 */

// 3 - Union type позволяет сказать коду, что сущность будет одним из педложенных типов
// 4 - Кортеж (tuple) - это структура, которая необходима для записи набора данных в строго определенном порядке по типам
// 5 - Механизм, когда мы определяем тип для того, чтобы выполнить с ним нужные операции называется - Сужение типов (Narrowing)
// 6 - Какой оператор или метод невозможно использовать для сужения типов? - Object.is()
// 7 - 
/*
Есть ли проблемы в этом коде?

const departments: string[] = ["dev", "design", "marketing"];
const department = departments[0];
department.parseInt();
ответ: ДА, В переменной department ледит строка а у строки нет метода parseint()
*/

// Какой из вариантов указания возвращаемого значения не доступен в функциях?
// function test(): []number {}

// Как называется данный прием? type AnimationTimingFunc = "ease" | "ease-out" | "ease-in"; - Псевдоним типа (Type Aliase)
// 10 - Литерал это - конкретное значение любого типа'

/*
Вопрос 11:
Какой тип будет в указанной строке? (7я строка)

function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    } else if (typeof msg === "number") {
        console.log(msg.toFixed());
    } else {
        console.log(msg); // Вот здесь! boolean
    }
}
*/

/*
Вопрос 12:
Какие типы будут у переменных a и b последовательно в указанной строке?

const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
        console.log(a, b); // Вот здесь! [number, number]
    }
};
*/

/*
Вопрос 13:
Какой тип будет у переменной res в данном коде?

const userDataTuple: [...boolean[], number, string] = [true, false, 40, "John"];
const res = userDataTuple.map(d => d.toString());

Ответ: - Да, метод toString() существует на всех этих типах и превращает каждый в строку. 
А значит, мы получим новый массив, состоящий полностью из строк.
*/

/*
Вопрос 14:
Какая проблема в этом коде?

const printReadings = (a: number[] | string) => {
    console.log(a.slice(0, 3));
};

оТВЕТ: Метод slice существует на этих типах проблем не будет
*/

/*
Вопрос 15:
Какой тип у переменной port3002 ?

const port3000: number = 3000;
const port3001 = 3001;
let port3002 = 3002; - NUMBER
*/