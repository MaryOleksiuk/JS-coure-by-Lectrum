/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(...args) {
  let sum = 0;

  for(let n of args) {
    if(typeof n === 'number') {
      sum += n;
    } else {
      throw new Error('Error: all parameters should be a Number type');
    }
  }

  return sum;
}

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

exports.f = f;
/* не удалять */
