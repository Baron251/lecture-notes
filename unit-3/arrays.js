/* 
    ? Unit 2: Data Structures
    - How we organize our data.
    - Utilize arrays and objects and use function to interact with them.

    ? Array
    - Denoted with square brackets [ ]
    - Indicies start at zero
        * indicies do not reflect the length of the array
    - Using a property "length", we can find the sum of data stored
*/

// Indices    0         1       2           3
let list = ["milk", "bread", "chicken", "butter"]

console.log(list[2]); // chicken

console.log(list.length); // 4, number of items in array (1 higher than highest index)

console.log(list[list.length]); // list[4], undefined

// If needing to find highest indicies, subtract 1 from the length
console.log(list[list.length - 1]); // butter

list[0] "chocy milk"; // reassign array values

console.log(list; // [' chocy milk '])