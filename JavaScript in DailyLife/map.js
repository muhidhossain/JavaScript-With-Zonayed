var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Without map()
var anotherArr = [];
for (var i = 0; i < arr.length; i++) {
    anotherArr.push(arr[i] * arr[i]);
}
console.log(anotherArr);

// With map()
var newArr = arr.map(function (item) {
    return item * item;
});
console.log(newArr);

var newArr2 = arr.map(function (item, index, fullArr) {
    console.log(
        'Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr
    );
});

console.log(newArr2);

// With map() and ES6

const newArr3 = arr.map((item) => item * item);
console.log(newArr3);
