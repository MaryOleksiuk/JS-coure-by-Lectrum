/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение

const date = new Date();
const currentDate = date.getDate();
const daysInCurrentMonth = 32 - currentDate;

Object.defineProperty(person, 'salary', {
  get: function() {
    return (daysInCurrentMonth - currentDate) > 20 ? 'good salary' : 'bad salary';
  }
});

person.salary; // good salary

exports.person = person;
