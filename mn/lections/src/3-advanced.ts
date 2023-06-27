// подробнее об Интерфейсах

interface User {
  // обязательн параметр - не можем переписать
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

// интерфейсы могут склеиваться - дополняться
// const user1: User = {};

// // глобально
// interface Window {
//   isAuth?: boolean;
// }
// window.isAuth;

interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

// созд что-то общее с Юзером и Персонажем
interface Emploee extends User, Person {
  contractStart: Date;
}

interface Developer extends Emploee {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
}

// const user1: Emploee = {};

const user1: Developer = {};

class MyDeveloper implements Developer {}

// ПОДРОБНЕЕ ОБ АЛИАСАХ - могут быть аналогами Интерфейсов

type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // type Union3 = "a" | "b" | "c" | "d" | "e" | "i"

// ошибка при одинаковых
// type Union1 = 'a' | 'b' | 'c' | 'd';
// type Union2 = 'a' | 'e' | 'c' | 'i';
// type Union3 = Union1 | Union2; // type Union3 = "a" | "b" | "c" | "d" | "e" | "i"

type Union4 = 'a' | 'b' | 'c' | 'd';
type Union5 = 'a' | 'e' | 'c' | 'i';
type Union6 = Union4 & Union5; // type Union6 = "a" | "c" - хранятся одинаковые части

// c объектами
type Union7 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};

// TYPE (Aliases)
// 1. primitives, union, intersection
// 2. type Window - cant be created

// vs INTERFACE
// 1. when we want expand interface in the fiture
// 2. class with implements
// 3. prefix I

// СУЖЕНИЕ ТИПОВ - nARROWING

function example1(x?: number | string) {
  if (typeof x === 'string') {
    x.toLowerCase();
  } else if (typeof x === 'number') {
    x.toFixed();
  } else if (x === undefined) {
    console.log('no value');
  } else {
    x;
  }
}

function example2(strs: string | string[] | null) {
  // if(typeof strs === 'object'){}
  // if (Array.isArray(strs)) {}
  if (strs && typeof strs === 'object') {
    strs.concat([]);
  } else if (typeof strs === 'string') {
    strs.toLocaleLowerCase();
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getDate();
  } else {
    x.concat([]);
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// TYPE GUARDS

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move2(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }

  return animal.fly();
}

// ASSERTS
type User3 = {
  name: string;
  displayName: string | null;
};

function assertDisplayName(
  user: User3
): asserts user is User3 & { displayName: string } {
  if (!user.displayName) throw new Error('error - user has no display name');
}

function logUserByDisplayName(user: User3) {
  assertDisplayName(user);

  console.log(user.displayName.toUpperCase());
}

// ТИПИЗАЦИЯ THIS

const user4 = {
  id: 1243,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// конкретизируем что тае тут this
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
