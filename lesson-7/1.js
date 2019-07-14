/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 * 
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


// Решение

function inspect(arr) {
  if(arguments.length !== 1) {
      throw new Error('There should be one argument in function');
  }

  if(!Array.isArray(arr)) {
    throw new Error('Argument should be an array');
  }

  let filteredItems = arr.filter(function(item) {
      return typeof item === 'string';
  });

  let arrayLength = filteredItems.map(function(filteredItem){
      return filteredItem.length;
  });

  return arrayLength;
}

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
