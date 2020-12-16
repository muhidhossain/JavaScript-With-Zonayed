var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Without ES6
var newArr = arr.filter(function (item) {
    return item % 2 == 0;
});
console.log(newArr);

// With ES6
const newArr2 = arr.filter((item) => item % 2 == 0);
console.log(newArr2);
