// # Задача 2
//
// Улучшить класс `DB` из предыдущей задачи.
//
// -   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
// -   Генерировать ошибку, если query не валидный
// -   Поля `name` и `country` ищут 100% совпадение
// -   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
// -   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
//
// ```javascript

class DB {
  constructor() {
    this.db = new Map();
  }

  generateId() {
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
      throw new Error('Current user doesnt not exist')
    }

    return this.db.delete(id);
  }

  find(query) {
    const customers = this.readAll();

    if(typeof query !== 'object') {
      throw new Error('Search query is invalid.');
    }

    let res = [];

    if(query.name) {
      res = customers.filter(customer => customer.name === query.name);
    }

    if(query.country) {
      res = customers.filter(customer => customer.country === query.country);
    }

    if(query.age) {
      if(query.age.min && !query.age.max) {
        res = customers.filter(customer => customer.age >= query.age.min);
      } else if(!query.age.min && query.age.max) {
        res = customers.filter(customer => customer.age <= query.age.max);
      } else if(query.age.min && query.age.max) {
        res = customers.filter(customer => customer.age >= query.age.min && customer.age <= query.age.max);
      }
    }

    if(query.salary) {
      if (query.salary.min && !query.salary.max) {
        res = customers.filter(customer => customer.salary >= query.salary.min);
      } else if (!query.salary.min && query.salary.max) {
        res = customers.filter(customer => customer.salary <= query.salary.max);
      } else if (query.salary.min && query.salary.max) {
        res = customers.filter(customer => customer.salary >= query.salary.min && customer.salary <= query.salary.max);
      }
    }

    return res;
  }
}

const query = {
    country: 'ua',
    name: 'Pitter',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const db = new DB();

const person = {
  name: 'Pitter', // обязательное поле с типом string
  age: 22, // обязательное поле с типом number
  country: 'ua', // обязательное поле с типом string
  salary: 500 // обязательное поле с типом number
};

db.create(person);

const customers = db.find(query); // массив пользователей

console.log(customers);