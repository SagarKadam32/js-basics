console.log('Hello World!');
let firstName = 'Sagar';
let lastName = 'Kadam';
const piValue = 3.14;
// piValue = 2.3;  //

// Primitive Types
let myName = 'Sagar'; //String Literal
let age = 41; // Number Literal
let isAwesome = true; // Boolean
let boxItem = undefined;
let selectedColor = null;
age = 32.34;

// Object
let person = {
    name: 'Tom',
    age: 56
}
console.log(person.name);
console.log(person.age);

person.name = 'Josh';
person.age = 47;
console.log(person.name);
console.log(person.age);

// Array
let selectedColors = ['Red', 'Blue'];
console.log(selectedColors);

selectedColors[2] = 'Purple';
console.log(selectedColors);


// Function

function greet() {
    console.log('Hello world!');
}

greet();

function greetWithName(name) {
    console.log('Hello' + ' ' + name);
}

greetWithName('Sagar');
// Function performing task
function greetMe(fName,lanme) {
    console.log('Hello' + ' ' + fName + ' ' + lanme);
}

greetMe('Sagar','Kadam');


// Function performing calculations

function square(number) {
    return number * number
}

console.log(square(4));


// Arithmatic operators

// Comparison operators

let x = 1
console.log('Equality Operator');
console.log(x === 1);
console.log(x !== 1);

// String Equality Operator
console.log('Strict Equality Operator');
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality Operator
console.log('Loose Equality Operator');
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);


// Ternary Operator
console.log('Ternary Operator');
let points = 110;
let type =  points > 100 ? 'gold' : 'silver';

console.log(type);

let a = 'red';
let b = 'blue';


console.log('Original');
console.log(a);
console.log(b);


let c = a;
a = b;
b = c;
console.log('Afer Swapping');
console.log(a);
console.log(b);

console.log('FOR IN LOOP');
for(key in person) {
    console.log(key, person[key]);
}

console.log('FOR OF LOOP');
let colors = ['red', 'green', 'blue'];
for(color of colors) {
    console.log(color);
}

function getMax(num1, num2) {
    if(num1 > num2) {
        return num1
    }else {
        return num2
    }
}
function max(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

console.log('Max of Two');
console.log(getMax(65,645));
console.log(max(65,645));

console.log('Function Landscape/Portrait');

function isLandscape(width, height) {
    //return width > height ? 'Landscape' : 'Potrait'; 
    return (width > height);
}
console.log(isLandscape(43,23));

console.log('FizzBuzz Demo');
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => FizzBuzz
// Divisible by 3 or 5 => input
// Not a number => Not a number

const output = fizzBuzz(45);
console.log(output);

function fizzBuzz(input) {
    if (isNaN(input)) {
        return 'Not a number';
    }else if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz'
    }else if (input % 3 === 0){
        if (input % 5 === 0) {
            return input;
        }
        return 'Fizz';
    }else if (input % 5 === 0) {
        if (input % 3 === 0) {
            return input;
        }
        return 'Buzz';
    } 
}

console.log('Driver TestSpeed Demo');
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(90);

function checkSpeed(speed) {
    const speedLimit = 70;
    let kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('OK - Within Limits');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('Licences Suspended!!');
    else
        console.log('Points',points);
}

console.log('SHOW Numbers Demo');
showNumbers(10);

function showNumbers(limit) {
    for(i=0; i<= limit; i++) {
        if( i % 2 === 0) {
            console.log(i,'EVEN')
        }else {
           console.log(i,'ODD')
        }
    } 
    
    for(let j=0; j<=limit; j++) {
        const message = (j % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(j,message);
    }
}

console.log('Count TRUTHY')
const array = [1,2,3,'',5];

// falsy
// undefined
// null
// ''
// false
// 0
// NaN
countTruthy(array);
function countTruthy(array) {
    let truthy = 0
    for(element of array) {
        if (element) {
            truthy ++;
        }
    }
    console.log('Truthy Values = ', truthy);
}

console.log('Show Properties')

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    for(key in obj) {
        console.log(key, obj[key]);
    }

    for(key in obj) {
        if(typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

console.log('Sum of Multiple of 3 and 5');
// limit => 10
// Multiple of 3 => 3,6,9
// Multiple of 5 => 5,10

console.log(sum(10));

function sum(limit) {
    let sumAmount = 0;
    for (let i=1; i<= limit; i++) {
        if (i%3 === 0 || i%5 === 0) {
            sumAmount += i;
        }
    }

    return sumAmount;
}

console.log('Excercise - Grades');

// Calculate the average
// 1-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A

const marks = [90, 96, 89];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A'    
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value
    }
    return sum / array.length;
}