"use strict";
// Что такое TS
// 1. js + строгая типизация
// 2. статическая типизация - те мы не можем менять тип переменной
// 3. большинство ошибок заметно при написаниий кода
// 4. связь участков приложения описана через типы (автоподсказки)
let myVar = 1;
// myVar = 'test'; // error
// myVar.toUpperCase(); // error
// ошибок в рантайме будет меньше
// код не будет работать быстрее - может и медленнее
// ts нужен в крупных компаниях тк удобен при частой смене разработчиков
// проще вникать - дороже по цене
// АЛЬТЕРНАТИВЫ
// JS Doc - это специальн подъод со спец комментариями
/**
 * @param {number} a - num1
 * @param {number} b - num2
 */
// function sum(a, b) {
//     return a + b
// }
// sum(5,5)
// Flow - прямой аналог TS - ниже популярность
// БРАУЗЕР НИЧЕГО НЕ ЗНАЕТ ПРО TS ОН ЕГО КОМПИЛИРУЕТ В JS
// установка node.js + vs code
// npm init -y - инициализац проекта созд pack jsn
// npm i -D typescript
// преобразование ts в js тк в браузере ts не выполняется
// нам нужны именно файлики js следовательно нужно преобразование - компиляция
// те создаем конфиг ./node_modules/.bin/tsc --init мы созд tsconfig.json
// в нем ==>  "outDir": "./dist",
// и добавляем
/**
   },
  "include": ["src"],
  "exclude": ["node_modules"]
}
 */
// в pacj.jsn добавляем  "start": "tsc --watch",
// ТЕОРИЯ - базовая типизация - продвинутая типизация дженерики
// - комбинирования типов - классы - настройки компилятора - типизация в реакт - redux типизация
