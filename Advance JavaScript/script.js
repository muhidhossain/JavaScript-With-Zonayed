// this keyword
// global rules
console.log(this);
console.log(this === window);
// this keyword inside a function
function helloThis(){
    console.log(this);
}
console.log(helloThis());
// this keyword inside a function with strict mood
function helloThis1(){
    'use strict';
    console.log(this);
}
console.log(helloThis1());

// object rules
// this keyword inside a custom object
var myCustomObj = {
    name: 'Muhid Hossain',
    age: 21,
    anotherObj: {
        name: 'Hossain Muhid',
        msg: function(){
            console.log('My name is ' + this.name);
            console.log(this === myCustomObj.anotherObj);
        }
    }
}
console.log(myCustomObj.anotherObj.msg());

// clear rules
// fixing the value of this keyword by call, bind, apply method
var myCustomObj1 = {
    name: 'Muhid Hossain Peal',
    age: 21,
    job: 'student',
    anotherObj: {
        name: 'Hossain Muhid',
        value: function(){
            console.log(this);
        }
    }
}
console.log(myCustomObj1.anotherObj.value.call(myCustomObj1));

// call(), bind(), apply() method
// call() method
var myCustomObj2 = {
    name: "Muhid Hossain",
    age: 22,
    job: "Student",
    anotherObj: {
        name: "Hossain Muhid",
        value: function() {
            console.log("My name is " + this.name);
        }
    }
}
console.log(myCustomObj2.anotherObj.value());
console.log(myCustomObj2.anotherObj.value.call(myCustomObj2));

var karim = {
    name: "Karim Rahman",
    dob: 1996,
    age: function(currentYear) {
        console.log(this.name + " is " + (currentYear - this.dob) + " years old!");
    }
}
var rahim = {
    name: "Rahim Abdu",
    dob: 1986
}
console.log(karim.age(2020));
console.log(karim.age.call(rahim, 2020));

// apply() method
var myCustomObj3 = {
    name: "Muhid Hossain",
    age: 22,
    job: "Student",
    anotherObj: {
        name: "Hossain Muhid",
        value: function() {
            console.log("My name is " + this.name);
        }
    }
}
console.log(myCustomObj3.anotherObj.value.apply(myCustomObj3));

var karim1 = {
    name: "Karim rahman",
    dob: 1996,
    age: function(currentYear, msg) {
        console.log(msg + " " + this.name + " is " + (currentYear - this.dob) + " years old!");
    }
}
var rahim1 = {
    name: "Rahim Abdu",
    dob: 1986
}
console.log(karim1.age(2020, "Hello World!"));
console.log(karim1.age.apply(rahim1, [2020, "Hello World!"]));

// bind() method
var myCustomObj4 = {
    name: "Muhid Hossaun",
    age: 22,
    job: "student",
    anotherObj: {
        name: "Hossain Muhid",
        value: function() {
            console.log("My name is " + this.name);
        }
    }
}
console.log(myCustomObj4.anotherObj.value.bind(myCustomObj4));
var anotherFunc = myCustomObj4.anotherObj.value.bind(myCustomObj4);
console.log(anotherFunc());
var karim = {
    name: "Karim Rahman",
    dob: 1996,
    age: function(currentYear, msg) {
        console.log(msg + " " + this.name + " is " + (currentYear - this.dob) + " years old!");
    }
}
var rahim = {
    name: "Rahim Abdu",
    dob: 1986
}
var rahimAge = karim.age.bind(rahim, 2020);
console.log(rahimAge("Hello World!"));
var rahimAgeCalculator = karim.age.bind(rahim);
console.log(rahimAgeCalculator(2020, "Hello World!"));

// special example
// var myObj = {
//     name: "Muhid Hossain",
//     age: 22,
//     timer: function() {
//         setTimeout(function() {
//             console.log("My name is " + this.name);
//         }, 1000)
//     }
// }
// console.log(myObj.timer());
// var myAnotherObj = {
//     name: "Muhid Hossain",
//     age: 22,
//     timer: function() {
//         setTimeout(function() {
//             console.log(this);
//         }, 1000)
//     }
// }
// console.log(myAnotherObj.timer());
// console.dir(window);

// var myObj1 = {
//     name: "Muhid Hossain",
//     age: 22,
//     timer: function() {
//         setTimeout(function() {
//             console.log("My name is " + this.name);
//         }.bind(myObj1), 1000)
//     }
// }
// console.log(myObj1.timer());

// Object oriented javaScript
// object
var a = 10, b = 20;
console.log("Before swap: Value of a: " + a + " and Value of b " + b);
function swap(a, b) {
    console.log("Before swap inside function: value of a: " + a + " and value of b: " + b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap inside function: value of a: " + a + " and value of b: " + b);
}
console.log(swap(a, b));
console.log("After swap: value of a: " + a + " and value of b: " + b);

var obj = {
    a: 10,
    b: 20
};
console.log("Before swap: value of a: " + obj.a + " and value of b: " + obj.b);
function swap1(x) {
    console.log("Before swap inside function: value of a: " + x.a + " and value of b: " + x.b);
    var temp = x.a;
    x.a = x.b;
    x.b = temp;
    console.log("After swap inside function: value of a: " + x.a + " and value of b: " + x.b);
}
console.log(swap1(obj));
console.log("After swap value of a: " + obj.a + " and value of b: " + obj.b);

// prototype chain
console.dir({});
var oneArr = [1, 2, 3, 4, 5];
console.dir(oneArr);
var str = "My name id Muhid Hossain";
console.dir(str);
console.log(str.length);
var str1 = new String("My name is Muhid Hossain");
console.dir(str1);
var num = new Number(10);
console.dir(num);
var bool = new Boolean(true);
console.dir(bool);

// function constructor and new keyword
var Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
var samir = new Person("Samir Hossain", 22, "Student");
console.log(samir.name);
console.log(samir.age);
console.log(samir.job);

// constructor with method
var Personwithmethod = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBarth = function() {
        console.log(this.name + " is born in " + (2020 - this.age));
    }
}
var samirwithmethod = new Personwithmethod("Samir Hossain", 22, "Student");
console.log(samirwithmethod.dateOfBarth());