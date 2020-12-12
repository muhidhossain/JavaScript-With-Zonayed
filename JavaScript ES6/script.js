// javascript es6
// what's new?

// declaring variable with let and const
// declaring a variable with var and then change it in ES5
var a = "Muhid Hossain";
console.log("My name is: " + a);
a = "Hossain Peal";
console.log("Now the name is: " + a);

// declaring a variable with let and then change it in ES6
let a6 = "Muhid Hossain";
console.log("My name is: " + a6);
a6 = "Hossain Peal";
console.log("Now my name is: " + a6);

// difference between var and let
var i = 13;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Value: " + i);

let i6 = 13;
for (let i6 = 0; i6 < 5; i6++) {
    console.log(i6);
}
console.log("Value: " + i6);

// Immediately Invoked Function Expression (IIFE)

// Template Literal and String Method
var name = "Muhid Hossain",
    age = 22,
    work = "Student";
console.log("My name is " + name + " and I\'m " + age + " years old! Currently I\'m a " + work);
const name6 = "Muhid Hossain",
    age6 = 22,
    work6 = "Student";
console.log(`My name is ${name6} and I\'m ${age6} years old! Currently I\'m a ${work6}`);

// startsWith method
const start = "My name is Khan";
console.log(start.startsWith("My"));

// endsWith method
const end = "I love programming";
console.log(end.endsWith("my"));

// include method
const inc = "I love programming with JavaScript";
console.log(inc.includes("with"));

// repeat method
const rpt = "Hello World! ";
console.log(rpt.repeat(5));

// others
console.log(`I always want to say ${"Alhamdulillah ".repeat(5)}!`);

// arrow function and lexical this keyword
// ES5
var aFunc = function () {
    console.log("A Demo ES5 Function Expression");
}
console.log(aFunc());
// ES6 arrow function
const aFunc6 = () => console.log("A Demo ES6 Arrow Function");
console.log(aFunc6());
// automatic return
const dob = [1996, 1986, 2017, 1989];
const currentAge5 = dob.map(function (oneDob) {
    return 2020 - oneDob;
})
console.log(currentAge5);
const currentAge6 = dob.map(oneDob => 2020 - oneDob);
console.log(currentAge6);
// multiple argument
const currentAge62 = dob.map((oneDob, index) => `${index}: ${2020 - oneDob}`);
console.log(currentAge62);
// multiple line
const currentAge622 = dob.map(oneDob => {
    const age = 2020 - oneDob;
    return age;
})
console.log(currentAge622);

// lexical this keyword
const lex5 = {
    aFunc: function () {
        console.log(this);
        return function () {
            console.log(this);
        }
    }
}
console.log(lex5.aFunc()());
const lex6 = {
    aFunc: () => {
        console.log(this);
        return () => console.log(this);
    }
}
console.log(lex6.aFunc()());
const lex56 = {
    aFunc: function () {
        console.log(this);
        return () => console.log(this);
    }
}
console.log(lex56.aFunc()());

// destructuring
const hossain = ["Muhid Hossain", 22, "Student"];
var name = hossain[0];
var age = hossain[1];
var profession = hossain[2];
console.log(name);
console.log(age);
console.log(profession);

const [name16, age16, profession16] = hossain;

console.log(name16);
console.log(age16);
console.log(profession16);

var hossainObj = {
    nameObj: "Muhid Hossain",
    ageObj: 22,
    professionObj: "Student"
};

var nameObj5 = hossainObj.nameObj;
var ageObj5 = hossainObj.ageObj;
var professionObj5 = hossainObj.professionObj;

console.log(nameObj5);
console.log(ageObj5);
console.log(professionObj5);

const { nameObj, ageObj, professionObj } = hossainObj;

console.log(nameObj);
console.log(ageObj);
console.log(professionObj);

const { nameObj: nameObj6, ageObj: ageObj6, professionObj: professionObj6 } = hossainObj;

console.log(nameObj6);

var comObj = {
    anotherObj: {
        anotherNewObj: {
            title: "JavaScript ES6"
        }
    }
};

const { anotherObj: { anotherNewObj: { title } } } = comObj;
console.log(title);

// rest parameter
function arguments6(...anyName) {
    for (let i = 0; i < anyName.length; i++) {
        console.log("Argument passed " + anyName[i]);
    }
}
console.log(arguments6("Bangladesh", "india", "Sri-Lanka"));
console.log(arguments6('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut'));

// rest parameter with arrow function
const argumentsArr6 = (...anyName) => {
    for (let i = 0; i < anyName.length; i++) {
        console.log("Argument passed: " + anyName[i]);
    }
}

console.log(argumentsArr6("Bangladesh", "India", "Sri-Lanka"));

// default parameter
function defaultParams6(name= "Muhid Hossain", age = 22) {
    console.log("My name is " + name + " and I am " + age + " years old!");
}
console.log(defaultParams6());
console.log(defaultParams6("Muhid", 20));

// default parameter with function constructor
function FunctionConst6(name = "Muhid Hossain", age = 22) {
    this.name = name;
    this.age = age;
}
// var muhid6 = new FunctionConst6();
var muhid6 = new FunctionConst6("Muhid", 20)
console.log(muhid6.name);
console.log(muhid6.age);

// map
// creating new map
const zawad = new Map();
zawad.set("fullName", "Zawad Ahmed");
console.log(zawad.get("fullName"));
console.log(zawad.has("fullName"));
zawad.set("toBeRemoved", "willBeRemoved");
console.log(zawad.has("toBeRemoved"));
zawad.delete("toBeRemoved");
console.log(zawad.has("toBeRemoved"));
zawad.clear();
console.log(zawad);

const favourite = new Map();
favourite.set("name", "Muhid Hossain");
favourite.set("job", "student");
favourite.set("color", "blue");
favourite.set("os", "windows");
favourite.set("mobiles", "android");
console.log(favourite);
console.log(favourite.size);
favourite.forEach((value, key) => console.log(`Key is: ${key} and the value is: ${value}`));


// class
var Child5 = function(name, dob) {
    this.name = name;
    this.dob = dob;
}
var robiul = new Child5("Robiul Islam", 2000);
console.log(robiul.name);
console.log(robiul.dob);
Child5.prototype.currentAge = function() {
    console.log(this.name + " is " + (2020-this.dob) + " years old!");
}
console.log(robiul.currentAge());

class Child6 {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }

    currentAge() {
        console.log(`${this.name} is ${2020 - this.dob} years old!`);
    }
}

const robiul6 = new Child6('Robiul Islam', 2000);

console.log(robiul6.name);
console.log(robiul.dob);

robiul6.currentAge();

var Person5 = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person5.prototype.dateOfBirth = function() {
    console.log(this.name + ' born in ' + (2020 - this.age));
}

var robiul5 = new Person5('Robiul Islam', 20, 'Child');

robiul5.dateOfBirth();

class Person6 {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    dateOfBirth() {
        console.log(`${this.name} is born in ${2020 - this.age}`);
    }
}

const robi6 = new Person6('Robiul Islam', 20, 'Child');

robi6.dateOfBirth();

// class and inheritance
class PersonClassDemo {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.dateOfBirth = () => {
            console.log(`${this.name} is born in ${2020 - this.age}`);
        }
    }
}

class TeacherClassDemo {
    constructor(name, age, job, dateOfBirth, subject) {
        this.name = name;
        this.age = age;
        this.jbo = job;
        this.subject = subject;
        this.dateOfBirth = dateOfBirth;
    }
}

class PersonClass {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

class TeacherClass extends PersonClass {
    constructor(name, age, job, subject) {
        super(name, age, job);
        this.subject = subject;
    }
}

const ourSir = new TeacherClass('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');

console.log(ourSir.name);
console.log(ourSir.age);
console.log(ourSir.job);
console.log(ourSir.subject);

class PersonClassMeth {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    dateOfBirth() {
        console.log(`${this.name} born in ${2020 - this.age}`);
    }
}

class TeacherClassMeth extends PersonClassMeth {
    constructor(name, age, job, subject) {
        super(name, age, job);
        this.subject = subject;
    }
}

const ourSirMeth = new TeacherClassMeth('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');
ourSirMeth.dateOfBirth();