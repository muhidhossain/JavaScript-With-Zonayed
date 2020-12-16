var arr = [1, 2, 3, 4];

// Without ES6
var total = arr.reduce(function (sum, item) {
    return (sum += item);
}, 0);
console.log(total);

var total2 = arr.reduce(function (sum, item, index, fullArr) {
    console.log(
        'Item: ' +
            item +
            ' and index: ' +
            index +
            '. Full Array: ' +
            fullArr +
            ' and sum: ' +
            sum
    );
    return (sum += item);
}, 0);

console.log(total2);

// With ES6
const total3 = arr.reduce((sum, item) => (sum += item), 0);
console.log(total3);
