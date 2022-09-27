const arr = [-2, 45, 0, 11, -9];

function bubbleSorting(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }
  }
  console.log(arr);
}

bubbleSorting(arr);
