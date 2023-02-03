/* 
    A comment block in JS is "Alt + Shift + A"
*/

/* 
    Variables:
    - How we give the app/program/computer data(a thing we want the computer to know)
    - A declaration that stores data/data values 

    Variables are declared with JS keywords:
    - let , can reassign the variables value
    - const , cannot reassign a value to a const declared variable
    - var , old and not often used(fallible; prone to mistakes)

    Undeclared/no keyword: works but don't do it.
*/

let a = 100;
let streetAddress = "123 Sesame Street";

//1     2       3       4
let     v       =       1;

/* 
    1. JavaScript Keyword to denote the creation of a variable
    2. Name of the variable
        - Developers refer to and use teh variable name to grab the data stored.
        - Try to keep variable names pertaining to the data (if you can)
    3. Assignment operator (fancy tech/math for the equal sign)
    4. The initial value/data value
*/

// Variable Declaration
let x;
let y;

// Variable Initialization
let z = 10; // Anything on the right side of the assignment operator

// Assigning to Other Variables

let first = "Vaughn";
let last = "Winter";

let fullName = first + " " + last;

console.log(first, last, fullName);

console.log("Declaration: ", x); // Declaration: undefined

x = 13; // Assigned our variable x for the first time
// console.log('Initialization 1: ', x);

// Reassigned the value of x
x = 42;
console.log("Initialization 2: ", x);

let hi = "hello";
console.log("Both variables: ", x, hi);

// Let vs Const in action
// const is "new" in ES6: declare variables meant to remain unchanged

let today = "Great!";
const JavaScript = "Awesome!";
console.log(today, JavaScript);

today = "Lovely!";
// JavaScript = "Super!" // When we try to reassign a const variable = TypeError
console.log(today, JavaScript);

console.warn("This is your first warning! ");

let warning = "Uh oh, we've been warned...";
console.warn("Warning: ", warning);

let err = "This looks real bad and scary..."
console.error("Error: ", err)
let error = "Ope"
console.log(error)