// # Задача 2
//
// Улучшите класс `Customers` добавив функцию генератор.
//
// **Обратите внимание**:
//
// 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
//
// Пример использования:

// ```javascript



class Customers {
  constructor() {
    this.items = [];
  }

  add(obj) {
    if(!obj.name) {
      throw new Error('Please add name to the object');
    }

    this.items.push(obj);
  }

  *[Symbol.iterator]() {
    const filteredItems = this.items.filter((item) => item.verified);

    for(const item of filteredItems) {
      yield item;
    }
  }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }

