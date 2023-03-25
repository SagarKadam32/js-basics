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
console.log('=============================');
console.log('Equality Operator');
console.log('=============================');

console.log(x === 1);
console.log(x !== 1);

// String Equality Operator
console.log('=============================');
console.log('Strict Equality Operator');
console.log('=============================');

console.log(1 === 1);
console.log('1' === 1);

// Lose Equality Operator
console.log('=============================');
console.log('Loose Equality Operator');
console.log('=============================');

console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);


// Ternary Operator
console.log('=============================');
console.log('Ternary Operator');
console.log('=============================');

let points = 110;
let type =  points > 100 ? 'gold' : 'silver';

console.log(type);

let a = 'red';
let b = 'blue';


console.log('=============================');
console.log('Original');
console.log('=============================');
console.log(a);
console.log(b);


let c = a;
a = b;
b = c;
console.log('=============================');
console.log('Afer Swapping');
console.log('=============================');

console.log(a);
console.log(b);

console.log('=============================');
console.log('FOR IN LOOP');
console.log('=============================');

for(key in person) {
    console.log(key, person[key]);
}

console.log('=============================');
console.log('FOR OF LOOP');
console.log('=============================');

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

console.log('=============================');
console.log('Function Landscape/Portrait');
console.log('=============================');


function isLandscape(width, height) {
    //return width > height ? 'Landscape' : 'Potrait'; 
    return (width > height);
}
console.log(isLandscape(43,23));

console.log('=============================');
console.log('FizzBuzz Demo');
console.log('=============================');

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

console.log('=============================');
console.log('Driver TestSpeed Demo');
console.log('=============================');

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

console.log('=============================');
console.log('SHOW Numbers Demo');
console.log('=============================');

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

console.log('=============================');
console.log('Count TRUTHY')
console.log('=============================');

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

console.log('=============================');
console.log('Show Properties');
console.log('=============================');


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

console.log('=============================');
console.log('Sum of Multiple of 3 and 5');
console.log('=============================');

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

console.log('=============================');
console.log('Excercise - Grades');
console.log('=============================');

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

console.log('=============================');
console.log('Excercise - Stars');
console.log('=============================');
showStars(10);

function showStars(rows) {
    for(let row = 1; row <= rows; row++) {
        let pattern = ''
        for(let i=0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern)
    }
}

createHeader('Objects');

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

function createHeader(sectionTitle) {
    console.log('=============================');
    console.log(sectionTitle);
    console.log('=============================');
}

function addToMyNotes(array) {
    for(element of array) {
        console.log(element);
    }
}

createHeader('Factory Functions');
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('drawing factory function');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);

addToMyNotes([
    '1. Factory function is defined in camelCase',
    '2. Factory function uses the return keyword',
    '3. Factory function the function inside is directly referred w/o function keyword'])


createHeader('Constructor Functions');
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing constructor function')
    }
}
const myCircle = new Circle(1);
myCircle.draw();

addToMyNotes([
    '1. Constructor function is defined in Pascal Notation i.e. SagarKadam',
    '2. Here the memer is referred with this keyword',
    '3. Function is called with the "new" keyword'])

createHeader('Dynamic Nature of objects');

const myNewCircle = {
    radius:1
}
console.log(myNewCircle);
myNewCircle.color = 'yellow';
myNewCircle.draw = function() {}
console.log(myNewCircle);

delete myNewCircle.color;
delete myNewCircle.draw;
console.log(myNewCircle);


addToMyNotes([
    '1. Object properties in JS are dynamic, they can be added later or removed',
    '2. Const is associated with the assignment for the object, properties within are dynamic'])


createHeader('Excercise-1 : Creating object..');
// street
// city
// zipCode
// showAddress

function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const myAddress = new Address('Tejpal Scheme-2','Mumbai', 400057);
showAddress(myAddress);

function showAddress(address) {
    for(key in address) {
        console.log(key, address[key]);
    }
}

createHeader('Excercise-2 : Adress using the factory function');

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

const myAddr1 = createAddress('Road-1', 'Mumbai', 400054);
console.log(myAddr1);

createHeader('Excercise-2 : Adress using the Constructor function');

function NewAddress(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
const myAddr2 = new NewAddress('Road-Constructor','Mumbai',400055);
console.log(myAddr2);

createHeader('Excercise-3 : Object Equality');

let myAddr3 = new NewAddress('Tejpal Scheme-1','Mumbai', 400057);
let myAddr4 = new NewAddress('Tejpal Scheme-1','Mumbai', 400057);
// myAddr4 = myAddr3;

function areEqualSK(address1, address2) {
    let addressAreEqual = false;

    for(key1 in address1) {
        for(key2 in address2) {
            if (address1[key1] == address2[key2]) {
                addressAreEqual = true;
                console.log('Address are equal for the key', key1)
                break;
            }
        }

    }
    if(!addressAreEqual) console.log('Addresses are not equal')
}
areEqualSK(myAddr3,myAddr4);

function areSame(address1, address2) {
    if(address1 === address2) {
        return true;
    }else {
        return false;
    }
}
console.log(areSame(myAddr3,myAddr4));

function areEqual(add1, add2) {
    return add1.street === add2.street &&
            add1.city === add2.city && 
            add1.zipCode === add2.zipCode
}

console.log(areEqual(myAddr3,myAddr4))


createHeader('Excercise-4 : Blog Post Object');

let myPost = {
                title: 'Ekigai',
                body: `This is the body of the post
                    formatted in a long way...`,
                author: 'Hector Gracia',
                views: 1000,
                comments: [
                    {author: 'Test Commentor-1', body: 'This is very nice book'},
                    {author: 'Test Commentor-2', body: 'This is very nice book'},
                    ],
                isLive:  true
                };
console.log(myPost);
                
createHeader('Excercise-6 : Constructor Functions');

function MyBlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false
}

let myNewPost = new MyBlogPost('Title-A', 
                                'Body content of post', 
                                'Sagar Kadam');
console.log(myNewPost);


createHeader('Excercise-7 : Price Range Objects');

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10}, 
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20}, 
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [ {averagePerPerson: 5}]


createHeader('Arrays');
createHeader('Excercise-1 - Array From Ranges');

const numbers1 = arrayFromRange(-10, -4);

function arrayFromRange(min, max) {
    let array = [];
    for(let number = min; number <= max; number++) {
        array.push(number);
    }
    console.log(array);
}

createHeader('Excercise-2 - Search element like includes');
const numbers2= [1,2,3,4,5];
console.log(includes(numbers2, 1) ? 'Number exists' : 'Number Not Found')

function includes(array, searchElement) {
    for(element of array) {
        if(element === searchElement) return true;
    }
    return false;
}

createHeader('Excercise-3 - Except Elements');
const numbers3 = [1,2,3,4,5,6,1,5,2];
const excludedArray = except(numbers3, [1,2]);
console.log(excludedArray);

function except(array, excluded) {
    let newArray = []
    for(element of array) {
        if(!excluded.includes(element))
        newArray.push(element)
    }
    return newArray;
}








