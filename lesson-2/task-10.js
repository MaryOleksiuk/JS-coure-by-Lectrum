const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j] > arr[i]) {
      let max = arr[j];
      arr[j] = arr[i];
      arr[i] = max;
    }
  }
}

console.log(arr);