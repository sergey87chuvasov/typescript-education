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
