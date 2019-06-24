const array = [2, -1, -3, 15, 0, 4];

let sum = 0;

for (let num of array) {
  if (num > 0) {
    sum += num;
  }
}

console.log(sum);