//bubble sorting
// const arr = [-2, 45, 0, 11, -9];

// function bubbleSorting(arr) {
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
//       }
//     }
//   }
// }

// bubbleSorting(arr);

//insertion sorting
// const arr = [85, 12, 59, 45, 72, 51];
// const sortedData = [arr[0]];

// function insertionSorting(arr) {
//   let i = 0;

//   while (i < arr.length - 1) {
//     i++;
//     const a = sortedData.filter((el) => arr[i] < el);
//     const index = sortedData.indexOf(a[0]);
//     sortedData.splice(index, 0, arr[i]);
//   }
//   console.log(sortedData);
// }
// insertionSorting(arr);
