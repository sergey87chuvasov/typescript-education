"use strict";
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
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
slice('invasion', 2, 4);
slice('invasion', 2);
const user1 = {
    login: 'serge',
    email: 'serge@tut.by',
    password: 'qwerty12345',
    isOnline: true,
    lastVisited: new Date(2023, 6, 10),
};
const admin1 = {
    login: 'bob',
    email: 'adm@tut.by',
    password: 'qwe123',
    isOnline: false,
    lastVisited: new Date(2023, 6, 6),
    role: 'Super Admin',
};
function login(obj) {
    if (obj.login.length > 0 && obj.password.length > 0) {
        console.log(`Hello`, obj.login);
    }
}
console.log(login(user1));
console.log(login(admin1));
const juniorFrontendDeveloper = {
    login: 'serge_che',
    skills: ['HTML', 'CSS', 'JS', 'TS', 'React'],
    level: 'junior',
};
// create a function that change level of incoming developer
function gradeDevelop3(user, newLevel) {
    user.level = newLevel;
}
gradeDevelop3(juniorFrontendDeveloper, 'middle');
const Developer4 = {
    login: 'hryhorii_petrov',
    skills: ['HTML', 'CSS', 'JS', 'TS', 'React'],
    level: 'junior',
};
function changeGrade4(user) {
    if (user.level === 'junior') {
        return Object.assign(Object.assign({}, user), { level: 'middle' });
    }
    else if (user.level === 'middle') {
        return Object.assign(Object.assign({}, user), { level: 'senior' });
    }
    else {
        return user;
    }
}
const middleFrontendDeveloper4 = changeGrade4(Developer4);
console.log('result', middleFrontendDeveloper4);
