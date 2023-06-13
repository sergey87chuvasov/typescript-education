//  у нас есть json объект (офиса) который приходит с бэка - написать тип который соответствует этому json

/* 

{
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}

*/

//
let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79100000000',
    email: 'my@email.ru',
    address: {
      city: 'Москва',
    },
  },
};
