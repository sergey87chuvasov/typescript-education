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
