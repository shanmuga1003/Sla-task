// 1.	Use map to double all numbers in an array.
let arr1 = [1, 2, 3, 4];

let doubled = arr1.map(function(num) {
  return num * 2;
});

console.log(doubled);

// 2.	Use filter to get even numbers from an array.
let arr2 = [1, 2, 3, 4, 5, 6];

let even = arr2.filter(function(num) {
  return num % 2 === 0;
});

console.log(even);

// 3.	Use reduce to find the sum of an array.
let arr3 = [1, 2, 3, 4];

let sum = arr3.reduce(function(total, num) {
  return total + num; }, 0);

console.log(sum);

// 4.	Find the first number greater than 10.
let arr4 = [5, 8, 12, 20];

let result = arr4.find(function(num) {
  return num > 10;
});

console.log(result);

// 5.	Check if array includes a specific value.
let arr5 = [1, 2, 3, 4];

let check = arr5.includes(3);

console.log(check);