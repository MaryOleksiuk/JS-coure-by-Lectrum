const array = [1, 2, 5, 9, 4, 13, 4, 10];

for (let num of array) {
  if(num === 4) {
    console.log('Есть!');
    break;
  }
}