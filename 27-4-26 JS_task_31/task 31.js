// 1. Write a function that accepts a callback.

function Add(a,b,callback){
  callback(a+b);
}

function multiply(result){
  console.log(result * 5);
}

Add(2,3,multiply);

// 2. Create a promise that resolves or rejects.

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Number is positive");
    } else {
      reject("Number is negative or zero");
    }
  });
}

// 3. Handle promise using then and catch.

checkNumber(5)
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });