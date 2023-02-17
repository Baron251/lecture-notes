// ? Scope: Determines the accessibility (visibility) of variable/functions to JavaScript

/* 
    JS's 3 types of scope:
    - Block Scope
        - Defined by curly brackets { } to group elements or statements, block scope is also provided by let and const, ex. "code block"
    - Function Scope 
        - each function creates a new scope: variables inside functions are not accessible outside the function, also known as Local Scope
    - Global Scope 
        - variable declared outside a function is Global: all scripts and functions can access the variable
*/

let globalVariable = true;
console.log("Outside of func " + globalVariable)

function checkGlobalVariable() {
    console.log("Inside of func: " + globalVariable)
};

checkGlobalVariable();

// Global variable
let x = 12;

function scope() {
    // local variable
    let x = 33;
    console.log(x)
}

scope(); // 33
console.log(x); // 12


// Example 2
let y = 13;

function newScope() {
    y =1200;
    console.log(`In the newScope function: ${y}`);
    let z = 45;
}


newScope();
console.log(`Out of the function/globally: ${y}`);
// console.log(`Out of the newScope function: ${z}`); // Z is not defined, local variable to the function only


// ? Var vs Let
/* 
    Variable keywords:
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block

*/
