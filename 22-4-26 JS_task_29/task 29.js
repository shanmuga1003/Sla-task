//1. Show synchronous vs asynchronous execution.
// Synchronous execution
console.log("Synchronous")
console.log("First innings");

console.log("Interval");

console.log("Second innings");

// Asynchronous execution
console.log("Asynchronous")
console.log("Start");

setTimeout(() => {
  console.log("Execute after 5 seconds");
}, 5000);

console.log("End");


//2. Print a message after 2 seconds.
setTimeout(() => console.log("This will execute for 2 seconds"),2000);


//3. Print a counter every 1 second.
let count = 1;

let intervalid = setInterval(() => {
  console.log(count);
  count++;
  if(count>10){
    clearInterval(intervalid);
  }
},1000);