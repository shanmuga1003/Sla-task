// 1. Extract values from an array/object using destructuring.
const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

const person = {
  name: "John",
  age: 25,
  city: "Chennai"
};

const { name, age, city } = person;

console.log(name); // John
console.log(age);  // 25
console.log(city); // Chennai


// 2. Copy array using spread operator
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

copiedArray.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(copiedArray);   // [1, 2, 3, 4]


// 3. Function using rest operator
function sum(...nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(5, 10, 15, 20)); // 50