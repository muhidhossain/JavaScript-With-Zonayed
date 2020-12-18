const arrEvery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const isTrue = arrEvery.every(function (anItem) {
    return anItem === 1;
});

console.log(isTrue);

// With ES6
const isTrue6 = arrEvery.every((anItem) => anItem === 1);
console.log(isTrue);

const arrDiffEvery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

const isTrue1 = arrDiffEvery.every((anItem) => anItem === 1);
console.log(isTrue1);

// Formate of every method
// anArrSome.every((currentElement, index, theArray){
//     // codes
//     // should return true or false
// });

const isTrue2 = arrDiffEvery.every((currentElement, index, theArray) => {
    console.log(`Current Element: ${currentElement}`);
    console.log(`Index: ${index}`);
    console.log(`The Array: ${theArray}`);
    return true;
});

console.log(isTrue2);

// If the condition returned false every method stops working

const anNumberArrEvery = [1, 1, 1, 3, 4, 5, 6, 7, 8, 9];

const everyWorkFlow = anNumberArrEvery.every((anElement) => {
    console.log(`${anElement} is printed`);
    return anElement === 1;
});

console.log(everyWorkFlow);
