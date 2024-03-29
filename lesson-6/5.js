/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(array, callback, startValue){
  if(typeof callback !== 'function') {
    throw new Error('Second argument should be a function');
  }

  if(!Array.isArray(array)) {
    throw new Error('First argument should be an array');
  }

  if(arguments.length !== 3) {
    throw new Error('Function should have 3 arguments');
  }

  if(typeof startValue !== 'number') {
    throw new Error('Third argument should be a number');
  }

  let resultValue = startValue;

  for(let i = 0; i < array.length; i++) {
    resultValue = callback(resultValue, array[i], i, array);
  }
  return resultValue;
}

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        // console.log(accumulator); // значение-аккумулятор
        // console.log(item); // элемент массива
        // console.log(i); // индекс элемента
        // console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
