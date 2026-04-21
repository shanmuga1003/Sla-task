// Write concise arrow functions.
let add = (a, b) => a + b;

console.log(add(1,2));


// Create a simple class with constructor and method.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}


const p1 = new Person("Shanmuga", 23);
p1.sayHello();