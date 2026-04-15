let course = "MCA";  // value won't change
const c_id = 112;         // value can change

c_id = 115;

console.log(course);
console.log(c_id);



let name = "John";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old`);



function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // Hello, John!
console.log(greet());       // Hello, Guest!