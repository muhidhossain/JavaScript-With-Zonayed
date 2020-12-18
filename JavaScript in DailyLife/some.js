const anArrSome = ['hello', 1, 2, 3, 'Bangla', 5, 'world', 7, 8, 9];

const some = anArrSome.some(function (anElement) {
    return anElement === 9;
});

console.log(some);

const anotherSome = anArrSome.some(function (anElement) {
    return anElement === 10;
});

console.log(anotherSome);

// Formate of Some method

// anArrSome.some(function (currentElement, index, theArray) {
//     // some code
//     // return true or false
// });

// With ES6

const ES6Some = anArrSome.some((currentElement, index, theArray) => {
    console.log(currentElement);
    console.log(index);
    console.log(theArray);
});

console.log(ES6Some);

// If the condition returned true some method stops working

const workflowOfSome = anArrSome.some((anElement) => {
    console.log(`Current ELement: ${anElement}`);
    return anElement === 1;
});

console.log(workflowOfSome);
