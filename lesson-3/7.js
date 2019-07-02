/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение

function getDivisors(n) {
  let divisors = [];

  if (typeof n !== 'number') {
    throw new Error('Error: parameter type is not a Number');
  }

  if(n === 0) {
    throw new Error('Error: parameter can\'t be a 0');
  }

  for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
