// Write a function to add two numbers.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));


// Write a function expression to multiply two numbers.

let multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); 


// Write an arrow function to subtract two numbers.

const subtract = (a, b) => a - b;

console.log(subtract(10, 3)); 


// Write a function with parameters and return a value.

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Shanmuga"));


// Demonstrate global vs local scope.

let globalVar = "I am global variable";

function scope() {
  let localVar = "I am local variable";
  
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}

scope();

console.log(globalVar); // accessible
console.log(localVar); // Error: localVar is not defined