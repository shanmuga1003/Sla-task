//1. Create an object with name, age, and method sayHello().
let person = {
  name: "Shanmuga",
  age: 23,
  sayHello: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.name);
console.log(person.age);
console.log(person.sayHello());

//2. Access and modify object properties.
let person2 = {
  name: "Shanmuga",
  age: 23,
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};
console.log(person2.name);   
console.log(person2.age);    

person2.name = "Priyan";
person2.age = 22;

console.log(person2.name); 
console.log(person2.age);


// 3. Call an object method.
person2.sayHello();