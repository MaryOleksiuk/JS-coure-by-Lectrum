/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, number) {
  if(arguments.length !== 2) {
    throw new Error('There should be two arguments in function');
  }

  if(typeof number !== 'number') {
    throw new Error('Second argument should be a number');
  }

  if(typeof value !== 'object' &&
    typeof value !== 'string' &&
    typeof value !== 'number' ) {
    throw new Error('First argument should be a number/string/array/object');
  }

  return new Array(number).fill(value);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
