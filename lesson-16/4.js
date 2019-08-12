/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
class Stringer {
  reverse(str) {
    return str.split('').reverse().join('');
  }

  uppercaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  uppercaseAll(str) {
    const words = str.split(' ');
    let result = '';

    for(let i = 0; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    }

    return result;
  }
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;