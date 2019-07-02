/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
function f(n) {
  if(typeof n !== 'number') {
    throw new Error('Error: parameter is not a number type');
  }
  return n*n*n;
}

/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

exports.f = f;
/* не удалять */
