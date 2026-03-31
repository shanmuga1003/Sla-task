// 1. Declare variables using var, let, and const.
var studentName = "Shanmuga";     
let age = 23;              
const country = "India";

console.log("var" + " " + studentName);   
console.log("let" + " " + age);
console.log("const" + " " + country);

// 2. Create variables with string, number, boolean, null, undefined.
let str = "Hello Everyone";   // string
let num = 10;              // number
let isCheck = true;      // boolean
let emptyValue = null;     // null
let notDefined;            // undefined

console.log(typeof(str) + " " + str);
console.log(typeof(num) + " " + num);
console.log(typeof(isCheck) + " " + isCheck);
console.log(typeof(emptyValue) + " " + emptyValue);
console.log(typeof(notDefined) + " " + notDefined);

// 3. Use +, -, *, /, %, ==, ===, &&, ||.
let a = 10;
let b = 5;

console.log("Addition:", a + b);       // +
console.log("Subtraction:", a - b);    // -
console.log("Multiplication:", a * b); // *
console.log("Division:", a / b);       // /
console.log("Modulus:", a % b);        // %

console.log(a == "10");   // true 
console.log(a === "10");  // false 


console.log(true && false); // AND 
console.log(true || false); // OR 
