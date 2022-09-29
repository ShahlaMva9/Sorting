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

//binary search

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function binarySearching(arr, target) {
//   debugger;
//   let startIndex = 0,
//     endIndex = arr.length - 1;

//   while (startIndex <= endIndex) {
//     let middle = Math.floor((startIndex + endIndex) / 2);
//     const middleValue = arr[middle];
//     if (target === middleValue) {
//       return middleValue;
//     }
//     if (target < middle) {
//       endIndex = middle;
//     }

//     if (target > middle) {
//       startIndex = middle;
//     }
//   }
// }
// console.log(binarySearching(arr, 3));

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function jumpSorting(arr, step, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let check = true;
//   while (end <= end.length - 1 || check) {
//     let middle = start + step;
//     let middleValue = arr[middle];
//     if (target === middleValue) {
//       return middleValue;
//     }
//     if (target > middleValue) {
//       start = middle;
//     } else {
//       end = middle;
//       check = false;
//       return arr.splice(start, end).find((el) => el === target);
//     }
//   }
//   console.log(start, end);
// }
// console.log(jumpSorting(arr, 3, 4));
