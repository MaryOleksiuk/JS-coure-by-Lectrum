/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
function createFibonacciGenerator() {
  let rootNumber = 0;
  let nextNumber = 1;

  return function() {
    let oldRootNumber = rootNumber;
    let oldNextNumber = nextNumber;

    rootNumber = nextNumber;
    nextNumber = oldRootNumber + oldNextNumber;

    return rootNumber;
  }
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;
