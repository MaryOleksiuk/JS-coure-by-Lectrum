const array = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let num of array) {
  if (num % 2 === 0 && num > 3) sum += num;
}

console.log(sum);