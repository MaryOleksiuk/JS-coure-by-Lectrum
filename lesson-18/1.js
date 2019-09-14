// # Задача 1
//
// Создать класс `DB` который будет имплементировать `CRUD` модель.
//
// -   В качестве структуры данных использовать `Map`.
// -   Метод `create`:
// -   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
// -   -   возвращает `id`
// -   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
// -   Метод `read`:
// -   -   принимает идентификатор пользователь
// -   -   если такого пользователя нет возвращать `null`
// -   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
// -   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
// -   Метод `readAll`:
// -   -   возвращает массив пользователей
// -   -   генерировать ошибку если в метод `readAll` передан параметр
// -   Метод `update`:
// -   -   обновляет пользователя
// -   -   принимает 2 обязательных параметра
// -   -   генерирует ошибку если передан несуществующий `id`
// -   -   генерирует ошибку если передан `id` с типом не строка
// -   -   генерирует ошибку если второй параметр не валидный
// -   Метод `delete`:
// -   -   удаляет пользователя
// -   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`

// ```javascript

class DB {
  constructor() {
    this.db = new Map();
  }

  static generateId() {
    let id;
    id = Math.floor(Math.random() * 10000).toString();

    return id;
  }

  create(customer) {
    if(typeof customer !== 'object' || !customer) {
      throw new Error('Person object is invalid.');
    }

    if(typeof customer.name !== 'string') {
      throw new Error('Person name should be a string.');
    }

    if(typeof customer.country !== 'string') {
      throw new Error('Person country should be a string.');
    }

    if(typeof customer.age !== 'number') {
      throw new Error('Person age should be a number.');
    }

    if(typeof customer.salary !== 'number') {
      throw new Error('Person salary should be a number.');
    }


    const id = this.generateId();

    this.db.set(id, customer);

    return id;
  }

  read(id) {
    if(typeof id !== 'string' || arguments.length < 1) {
      throw new Error('ID should be a string');
    }

    if(!this.db.has(id)) {
      return null;
    }

    return this.db.get(id);
  }

  readAll() {
    if(arguments.length > 0) {
      throw new Error('Function doesnt accept parameters');
    }

    const customers = [];

    this.db.forEach((value, key) => {
      const customer = { id: key, ...value};
      customers.push(customer);
    });

    return customers;
  }

  update(id, data) {
    if(typeof id !== 'string') {
      throw new Error('Id should be a string');
    }

    if(!this.db.has(id)) {
      throw new Error('Current user doesnt not exist')
    }

    if(typeof data !== 'object' || !data) {
      throw new Error('Data object is invalid.');
    }

    this.db.set(id, { ...this.db.get(id), ...data });
  }

  delete(id){
    if(typeof id !== 'string') {
      throw new Error('Id should be a string');
    }

    if(!this.db.has(id)) {
      throw new Error('Current user doesnt not exist/')
    }

    return this.db.delete(id);
  }
}
const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей

db.update(id, { age: 54 }); // id

console.log(customers);

db.delete(id); // true
