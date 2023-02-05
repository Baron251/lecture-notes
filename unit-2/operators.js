/* 
JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
         ===


        - Assign
        - Compare
        - Arthmetic(Maths)
        - Logical
        - Conditionals 
 */

// Equal to: ==, checks value
"3" == 3;
console.log("3" == 3); // true
console.log("4" == 3); // false

// Strict Equal To: ---, checks value and data type
console.log("3" === 3); // false
console.log("hello" === "hello"); // true
console.log(100 === 200); // false

// Not Equal & Strict Not Equal: !=, !==
console.log("2" != 2); // false
console.log("2" != 3); // true
console.log("2" !== 2); // true
console.log("2" != "2"); // false

// Greater than / Less than: > <, true/false return
let y = 5 > 3;
console.log("Greater than: ", y);

// Greater than or equal to: <=
console.log(3 >= 2, 5 >= 10, 5 >= 5);

// Less than or Equal to: <=
console.log(2<= 2, 1 <= 2, 5 <= 2);

// And: &&, both must be true
console.log(2 < 10 && 2 > 1); // true
console.log(5 < 3 && 2 > 1); // false
console.log(5 > 10 && 3 > 5); // false
// console.log("And: ", 2 && 3);

//  Or: || , one must be true
console.log(2 || 4);
