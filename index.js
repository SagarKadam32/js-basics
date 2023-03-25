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

