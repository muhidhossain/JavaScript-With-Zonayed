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

