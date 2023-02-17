/* 
    Some fun fact vocab & good to know of things:
        - JS Statement: 
            - any block of code that is performing an action, i.e. the code directions we give the program, let x = 15;
            - JS programs are all just a bunch of statements.
        - JS Expressions: 
            - a block of code that evaluates to a value, i.e. performs some sort of action that *produces a value*
            - Expressions are statements, but statements are not all expressions
    
        To ask JS to perform logic (like conditionals, functions, etc.) we will commonly use this format:
            keyword name (expression) {
                ... code block of logic
            }
*/

/* 
    ? Conditionals
    - Our way to JS a question and get an answer as a response
    - Evaluates an expression and responds if it is true
    - Falsy
        - false
        - 0 
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

/* 
    If Statements: gives a yes/true response if the expression is true/valid
    Structure:
    if(expression evaluated) {
        ...code that runs only if expression is true
    }
*/

let isOn = true;

if (isOn == true) {
  console.log("The light is on!");
}

if (isOn) {
  console.log("The light is still on...");
}

isOn = false;

if (isOn == false) {
  console.log("The light is off.");
}

/* 
    If Else Statement: gives us a no(false) response if the expression isn't true or valid. A true code block and a false code block.
*/
// let weather = 65;
let weather = 75;

if (weather < 70) {
  console.log("Wear a jacket, it's chilly.");
} else {
  console.log("No jacket needed! It's nice out.");
}

let loggedInUser = false;

if (loggedInUser == true) {
  console.log("Welcome back! Here's your profile.");
} else {
  console.log("Please login or sign up to use the site!");
}

/* 
    And &&, Or ||, Not !=: evaluate an expression that is holding multiple check
*/

let rain = false;
let temp = 68;

if (temp < 70 && rain) {
  console.log("Jacket please.");
} else {
  console.log("No jacket needed.");
}

if (temp < 70 || rain) {
  console.log("Jacket please.");
} else {
  console.log("No jacket needed.");
}

rain = false;

console.log(rain);
console.log(!rain);

if (!rain) {
  console.log("Looks like a beautiful day.");
} else {
  console.log("Get your jacket!");
}

// ? Switch Statement
/* 
    keywords:
        - switch
        - case
        - break
            - takes us out of our code block
        - default
            - run if no cases match
    Structure:
    switch(expression) {
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        default:
            return;
    }
*/

let officeCharacter = "Jim";

switch (officeCharacter) {
  case "Michael":
    console.log("My mind is going a mile an hour.");
    break;
  case "Dwight":
    console.log("Perfectenschlag");
    break;
  case "Jim":
    console.log("Bears. Beets. Battlestar Galactica");
    break;
  case "Pam":
    console.log("Yup");
    break;
  default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

// String interpolation: using a variable in a string with backticks, dollar sign, and {}
let myName = "Kate";
let bff = "Ben";
console.log(`My name is ${myName} and my best friendo is ${bff}!`); // interpolation happens with use of backtick and ${}
console.log("My name is ${myName} and my best friendo is ${bff}!"); // Just a normie string

// let num = 5;
let num = -7;
// let num = -20;

switch (true) {
  case num < 0 && num > -10:
    console.log("Case 1 ran.");
    break;
  case num > 0:
    console.log("Case 2 ran.");
    break;
  default:
    console.log("Default ran, no case worked.");
    break;
}

let grade = "A";
switch (true) {
  case grade == "A":
  case grade == "B":
    console.log("Great job.");
    break;
  case grade == "C":
    console.log("Doing well, but maybe study a bit more.");
    break;
  case grade == "D":
  case grade == "F":
    console.log("Uh, I would really start studying...");
    break;
  default:
    console.log("That's not a grade value...");
}

// ? Ternary
/* 
    Always a If/Else style conditional at minimum.
    Structure:
    expression ? true : false;
*/

// let expression = false;
let expression = true;

expression ? console.log("Runs true") : console.log("Runs false");

let newNum = 6;

newNum > 0
  ? console.log("Yes, greater than 0")
  : console.log("No, less than 0.");

// as an if/else
if (newNum > 0) {
  console.log("yes");
} else {
  console.log("no");
}

// ? Else/If

let anotherNum = -3;

if (anotherNum == 0) {
  console.log("Hello");
} else if (anotherNum > 0) {
  console.log("Hey there!");
} else {
  console.log("Goodbye");
}

anotherNum == 0
  ? console.log("Hello")
  : anotherNum > 0
  ? console.log("hi")
  : console.log("goodbye again");

let numOne = 5;
// let numOne = -5;
let numTwo = 2;

let value = numOne + numTwo > 1 ? numOne + numTwo : 0;
console.log(value);
