// 2. Write a function that accepts a callback.
function greet(name) {
  console.log("Hello " + name);
}

function user(callback) {
  let name = "Shanmuga";
  callback(name); // calling the callback function
}

user(greet);