// javascript es6
// what's new?

// declaring variable with let and const
// declaring a variable with var and then change it in ES5
var a = "Muhid Hossain";
console.log("My name is: " + a);
a = "Hossain Peal";
console.log("Now the name is: " + a);

// declaring a variable with let and then change it in ES6
let a6 = "Muhid Hossain";
console.log("My name is: " + a6);
a6 = "Hossain Peal";
console.log("Now my name is: " + a6);

// difference between var and let
var i = 13;
for(var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Value: " + i);

let i6 = 13;
for(let i6 = 0; i6 < 5; i6++) {
    console.log(i6);
}
console.log("Value: " + i6);

// Immediately Invoked Function Expression (IIFE)

// Template Literal and String Method
var name = "Muhid Hossain",
    age = 22,
    work = "Student";
console.log("My name is " + name + " and I\'m " + age + " years old! Currently I\'m a " + work);
const name6 = "Muhid Hossain",
      age6 = 22,
      work6 = "Student";
console.log(`My name is ${name6} and I\'m ${age6} years old! Currently I\'m a ${work6}`);

// startsWith method
const start = "My name is Khan";
console.log(start.startsWith("My"));

// endsWith method
const end = "I love programming";
console.log(end.endsWith("my"));

// include method
const inc = "I love programming with JavaScript";
console.log(inc.includes("with"));

// repeat method
const rpt = "Hello World! ";
console.log(rpt.repeat(5));

// others
console.log(`I always want to say ${"Alhamdulillah ".repeat(5)}!`);