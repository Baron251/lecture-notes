/* 
? Async/Await
    - Introduced in ES8 in 2017
    - Can make any function async simply by denoting (naming) it as such
    Keywords:
    - async, denotes a function to be async
    - await, calls a process to "wait" for our results
    - Can help us reduce the need for Callback functions!
    - CANNOT be used in loops!
    - ALWAYS returns a promise.
*/

// Example Structure / Syntax
// Async Function Declaration (declarative style)
async function asyncFuncName() {
    // ...code to run
  }
  
  // Async Function Expression
  let funExpressionName = async function () {
    // ...code to execute
  };
  
  // Async Arrow Function
  let arrowFuncName = async () => {
    // ...code block
  };
  

  
// ------------------------------------------------------
// * Because async functions ALWAYS return a promise, we can use promise resolvers! (.then(), .catch())

async function getName() {
    return "Gandalf the Grey";
}

// console.log(getName()); // Promise { 'Gandalf the Grey' }
// .then(): a method that attached a callback func for the resolution of the promise
getName().then((data) => console.log(data));

/* 
? Await
 - Tells JS that a promise is being returned and to wait on that result.
*/

async function extraData() {
    // returnData() is one of our functions in our promises.js
    // let info = returnData(); // ran so quickly it printed/returned [object Promise]

    // Include await so we "wait" for the response, so we don't get undefined data
    let info = await returnData();

    return `${info} stored in some cloud... or API...`
}

extraData().then((data) => console.log("Line 51 return of AsyncAwait.js"))