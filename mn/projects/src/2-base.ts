// 1 - // Дана JavaScript функция. Необходимо переписать ее на TypeScript.

/* 
function slice(str, start, end) {
  let newStr = '';

  let lastIndex;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}

*/

/*
  Вопросы к этому заданию:
    Какой тип возвращает заданная функция slice? - string
    Какой символ используется для задания опционального параметра функции? - ?
*/

function slice(str: string, start: number, end?: number): string {
  let newStr = '';

  let lastIndex: number;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}

slice('invasion', 2, 4);
slice('invasion', 2);

// 2 - Создайте интерфейс по заданным ключам и создайте функцию проверки пользователя.

/*
Создайте интерфейсы User и Admin.

User должен содержать следующие ключи:

login, email, password, isOnline, lastVisited
Admin содержит все те же ключи, плюс ключ role.

Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

Каким образом типизуруется дата в TypeScrip?
*/

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

const user1: User = {
  login: 'serge',
  email: 'serge@tut.by',
  password: 'qwerty12345',
  isOnline: true,
  lastVisited: new Date(2023, 6, 10),
};

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const admin1: Admin = {
  login: 'bob',
  email: 'adm@tut.by',
  password: 'qwe123',
  isOnline: false,
  lastVisited: new Date(2023, 6, 6),
  role: 'Super Admin',
};

function login(obj: { login: string; password: string }): void {
  if (obj.login.length > 0 && obj.password.length > 0) {
    console.log(`Hello`, obj.login);
  }
}

console.log(login(user1));
console.log(login(admin1));

// 3 - Создайте union-тип Level с уровнями для разработчика. Используйте его для интерфейса Developer и для функции gradeDeveloper.
/**
Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level и новый уровень. В теле функции для полученного объекта должен назначаться следующий уровень.
Сколько вариантов значений может принимать union-тип?
 */

type Level_3 = 'junior' | 'middle' | 'senior';

interface Developer3 {
  login: string;
  skills: string[];
  level: Level_3;
}

const juniorFrontendDeveloper: Developer3 = {
  login: 'serge_che',
  skills: ['HTML', 'CSS', 'JS', 'TS', 'React'],
  level: 'junior',
};

// create a function that change level of incoming developer

function gradeDevelop3(user: { level: Level_3 }, newLevel: Level_3) {
  user.level = newLevel;
}

gradeDevelop3(juniorFrontendDeveloper, 'middle');

// 2 ver
type Levl = 'junior' | 'middle' | 'senior';

interface Dev {
  login: string;
  skills: string[];
  level: Levl;
}

const Developer4: Dev = {
  login: 'hryhorii_petrov',
  skills: ['HTML', 'CSS', 'JS', 'TS', 'React'],
  level: 'junior',
};

function changeGrade4(user: Dev): Dev {
  if (user.level === 'junior') {
    return {
      ...user,
      level: 'middle',
    };
  } else if (user.level === 'middle') {
    return {
      ...user,
      level: 'senior',
    };
  } else {
    return user;
  }
}

const middleFrontendDeveloper4 = changeGrade4(Developer4);
console.log('result', middleFrontendDeveloper4);
