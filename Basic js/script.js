// if statement
var myName = 'Muhid Hossain'
if(3 < 5){
    console.log('Yeah I will executed');
}

if (myName === 'Muhid Hossain'){
    console.log('You are allowed');
}

if (myName === 'Karim') {
    console.log('You are allowed');
}

// if...else statement
 var age = 21;
 if(age > 18){
     console.log('Now you am adult');
 }
 else{
     console.log('No you are not aged enough to be a adult');
 }

 // if...else if statement
 var age1 = 61;
 if (age1 > 18) {
     if (age1 > 30) {
         console.log('You are a complete man');
     }
     else if(age1 > 60){
         console.log('You are a old man');
     }
     else{
         console.log('You are a young man');
     }
 }
 else{
     console.log('You are a child');
 }

 // maximum
 var a = 800;
 var b = 100;
 var c = 700;

 if(a > b){
     if(a > c){
         console.log('a is bigger');
     }
     else if(a < c){
         console.log("c is bigger");
     }
 }
 else{
     console.log('b is bigger');
 }

 var max = Math.max(a, b, c)
 console.log(max);

 // switch statement
 var weekDay = 'Friday';

 switch(weekDay){
    case 'Saturday':
        console.log('Saturday!, Today is closed');
        break;
    case 'Sunday':
        console.log('It is Sunday, normal working day');
        break;
    case 'Monday':
        console.log('It is Monday, normal working day');
        break;
    case 'Tuesday':
        console.log("It is Tuesday, normal working day");
        break;
    case 'Wednesday':
        console.log('It is Wednesday, normal working day');
        break;
    case 'Thursday':
        console.log('It id Thursday, normal working day');
        break;
    case 'Friday':
        console.log('Friday!, It is closed today');
        break;
    default:
        console.log('Not a day');
 }

 // array 
 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar']

// accessing all item from an array
 for (let i = 0; i < arrName.length; i++) {
     console.log('Name: ' + arrName[i]);
     
 }

 // adding item at last of an array
 arrName.push('Shafiq');
 console.log(arrName);

 // removing last item from array
 arrName.pop();
 console.log(arrName);

 // removing first item from array
 arrName.shift();
 console.log(arrName);

 // adding item at first of an array
 arrName.unshift('Shafiq')
 console.log(arrName);

 // to know the index number of an item inside an array
 var indexOf = arrName.indexOf('Karim')
 console.log(indexOf);

 // removing item by index number from an array
 arrName.splice(1, 2)
 console.log(arrName);

 // storing data that spliced from an array in a new array
 var newArr = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 0];
 var spliceArr = newArr.splice(3);
 console.log(newArr);
 console.log(spliceArr);

 // copying an array
 var copyArr = arrName
 console.log(copyArr);

 // accessing item inside a object with dit notation and bracket notation
 var rahim = {
     fullName: 'Rahim Miya',
     age: 21,
     address: 'Dhaka',
     job: 'Job Holder'
 }
// dot notation
console.log(rahim.fullName);
// bracket notation
console.log(rahim['fullName']);
// adding new item in the object
rahim.zipCode = 3517;
console.log(rahim);
// changing value of an item inside the object
rahim.job = 'Student';
console.log(rahim);
// adding function inside the object
rahim.welcomeMsg = function(){
    console.log('Hello There');
}
console.log(rahim.welcomeMsg());
// accessing all the items inside the object
for(item in rahim){
    console.log(item);
}

// array inside an object
var objArr = {
    normal: 'Normal Item',
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'],
    age: [10, 20, 30, 40, 50]
}
// accessing item inside an array of an object
console.log(objArr.name[2]);

// object inside an array
var arrObj = ['Zonayed', {name: 'Rafiq', Age: 21, job: 'Student'}, 'Bangladesh']
// accessing item inside object of an array
console.log(arrObj[1].name);


// function declaration
function funcName(){
    console.log('Hello I am from the function');
}
var funcName = function(){
    console.log('Hello I am from the function');
}
// calling a function
console.log(funcName());

// adding two number with a function
function sumMachine(a, b){
    var sum = a + b;
    return sum;
}
console.log(sumMachine(2, 2));
console.log(sumMachine(4, 4));

// passing a function as argument through another function
function callMyName(name, callback){
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr. ' + name);
}
function hello(age){
    console.log('I am passed through argument and my age is: ' + age);
}
console.log(callMyName('Muhid Hossain', hello));

// returning a function from another function
function welcomeMsg(name){
    console.log('Welcome Mr. ' + name);
    return function(menu){
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}
console.log(welcomeMsg('Muhid Hossain')('Coffee'));

// execution context
var a = 10
console.log(window.a);
if (a === window.a) {
    console.log(true);
}

//execution stack
var name = 'Hossain';
function first(){
    var welcome = 'Hello ';
    second();
    console.log(welcome + name);
}
function second() {
    var welcome2 = 'Hi! ';
    third();
    console.log(welcome2 + name);
}
function third() {
    var welcome3 = 'Hey! ';
    console.log(welcome3 + name);
}
console.log(first());

// (hoisting) calling a function before declaration
console.log(aFunc());
function aFunc() {
    var a = 10;
    var b = 20;
    var sum = a + b;
    console.log('Sum: ' + sum);
}

// but if we call a function expression before declaration it will show error
// console.log(name());
// var name = function(){
//     console.log('My name is Muhid Hossain');
// }

console.log('Value: ' + x);
var x = 10;
console.log('Value: ' + x);

// local scope (we can not access the local variable from outside the function)
function localScope(){
    var local = 'I am local to my own function';
    console.log(local);
}
console.log(localScope());

// global scope (we can access global variable from anywhere)
var globalVar = 'I am a Global Variable';

function globalScope(){
    console.log('Inside a Function: ' + globalVar);
}
console.log(globalScope());
console.log('Outside: ' + globalVar);

// lexical scoping (relation between a parent and child function)
function parentFunction() {
    var a = 6;
    function childFunction() {
        var b = 4;
        console.log('Sum: ' + (a + b));
    }
    childFunction()
}
console.log(parentFunction());

// closer
function closersDemo(){
    var x = 10;
    return function(){
        var y = 20;
        console.log('Sum: ' + (x + y));
    }
}
console.log(closersDemo()());
// the function can be assigned as a variable
var aVAr = closersDemo();
var total = aVAr();
console.log(total);
// we also can pass arguments
function aParentFunc(a){
    return function(b) {
        console.log('Sum: ' + (a + b));
    }
}
console.log(aParentFunc(6)(4));
// and we also can do like this
var aParentVar = aParentFunc(6);
var aTotal = aParentVar(4);
console.log(aTotal);

// Immediately Invoked Function Expression (IIFE)
(function aDemoFunc() {
    console.log('Hello World!');
})();