//1. Use push, pop, shift, unshift on an array.
let arr = [10, 20, 30];

console.log("Original Array:", arr);

// push adds element at the end
arr.push(40);
console.log("After push:", arr);

// pop removes last element
arr.pop();
console.log("After pop:", arr);

// unshift adds element at the beginning
arr.unshift(5);
console.log("After unshift:", arr);

// shift removes first element
arr.shift();
console.log("After shift:", arr);


//2. Print all elements of an array using for loop.
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}