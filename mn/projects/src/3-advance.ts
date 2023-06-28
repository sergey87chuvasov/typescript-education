// Создайте в двух вариантах (алиасах и интерфейсах) заданную структуру.

// Product: price, isNew, isSale, title
// Vehicle: wheels, year, brand
// Car: type, model + Product, + Vehicle

/*
  Вопросы к этому заданию:
  
  Можно ли через интерфейс описать union тип? - Нет. Для этого мы используем алиасы type.
  Можно ли создать в одном файле несколько интерфейсов с одинаковым именем? - Можем. Но формально это будет не несколько интерфейсов, а один интерфейс и дополнения к его сигнатуре.
*/

interface IProduct {
  title: string;
  price: number;
  isNew: boolean;
  isSale?: boolean;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

// созд Интерфейс который объединяет сущности которые мы видели ранее
interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

const icar1: ICar = {};

// C ТИПАМИ алиасаМИ
type Product = {
  title: string;
  price: number;
  isNew: boolean;
  isSale?: boolean;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

// созд Интерфейс который объединяет сущности которые мы видели ранее
type Car = Product &
  Vehicle & {
    type: string;
    model: string;
  };

const car1: Car = {};

// Напишите две функции типа type guards.
// Опишите функции type guards и выведите их типы.

/*
Для чего служит оператор as?
Оператор as позволяет сделать утверждение, что та или иная переменная является конкретным типом.
Он позволяет делать сужение типа для any и unknown, а также для union типов.
*/

interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return !!order && 'email' in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return !!order && 'callerNumber' in order;
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}

// Опишите перегрузку для заданной функции.
function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

const x = head('ssd');
const y = head([1, 2, 3]);
// Какое количество перегрузок доступно для одной функции?
// - Неограниченное количество
