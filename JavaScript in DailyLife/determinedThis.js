const anObj = {
    name: 'Muhid Hossain',
    age: 23,
};

const anoArray = [1, 2, 4, 5, 6, 7, 9, 3];
anoArray.map(function (single, index, fullArr) {
    console.log(this);
});

anoArray.map(function (single, index, fullArr) {
    console.log(this);
}, anObj);
