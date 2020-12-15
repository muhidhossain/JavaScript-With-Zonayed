// Passing function as argument
function callMyName(name, callback) {
  var myAge = 23;
  callback(myAge);
  console.log('Is it interesting? Yes it is Mr. ' + name);
}

function hello(age) {
  console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Muhid Hossain', hello);

// Returning function from function
function welcomeMsg(name) {
  console.log('Welcome Mr. ' + name);
  return function options(menu) {
    console.log('Do you like ' + menu + ' Mr. ' + name);
  };
}

welcomeMsg('Muhid Hossain')('Coffee');

// Storing function as variable
var aFunc = function (name) {
  console.log('I am simply a function and my name is ' + name);
};

var anotherVar = aFunc;
anotherVar('Muhid Hossain');

// Simple uses of map()

// Without map()
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var anotherItems = [];
for (var i = 0; i < items[i]; i++) {
  anotherItems.push(items[i] * 2);
}

console.log(anotherItems);

// With map()

var mapItems = items.map(function (item) {
  return item * 2;
});

console.log(mapItems);

// With map() and ES6 syntax

var es6Items = items.map((item) => item * 2);

console.log(es6Items);
