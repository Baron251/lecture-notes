/* 
    ? API
    - Application Programming Interface
    - Wonderful way to access data we are trying to obtain
        - Data that is not in our local project.
        - Ex: data stored in database, cloud storage, or someone else's public database(via a public API)
    - Allows the Client(front end of the application, web page, program) to communicate with the/a server(database)
    -Allows HTTP requests and response lifecycle.
*/

/* 
    ? AJAX
    - Asynchronous JavaScript and XML
    - Might see if working with older code bases
    - Wrap XML with XMLHttpRequests -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic section of our page.
    Pros:
        - Page components loaded individually
        - New data updated regularly
    Cons:
        - JS must be enabled
        - Adds more complex aspects.
        - refreshes the page state and stores info can bloat.
        - Difficulty for screen readers.
    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON
        - Fetch
        - JS bringing it all together
    - Not Promised based.
    *jQuery
        - AJAX often works with it
        - A library that helps us handle the front end.
        - Prior to DOM and Fetch
        - still used but dated
    example:
        - timed updates to comments (replies)
        - infinite scrolling
        - dynamic search results
*/

/* 
    ? Fetch
    - Before fetch(), we would have had to use an httpRequest through the above noted system^

    - Is an API
    - A global method that requires 1 argument:
        - The location of data (URL) we are trying to obtain
    - Handles both the request and response
    - Returns a Promise
        - Allow us to access our resolvers (chain .then()/ .catch())
        - Resolvers = okay, got the thing (or didn't), hey code now perform this next action

    
*/

const log = console.log; // Us creating a shortcut variable to hold the console.log functionality
// log(whateverthefrick)

// Store API URL in a global variable
// Endpoint/Route are like the web address url, interchangeable words
const testEndpoint = "https://dog.ceo/api/breeds/image/random";
// log(testEndpoint)
// log(fetch(testEndpoint)); // Shows that fetch returns a promise, promise showed we got a success of 200

// Write a fetch: use teh fetch global method & pass the url variable
fetch(testEndpoint)
    .then((response) => {
        log("1st fetch .then", response)
        return response;
    })
    .then((res) => {
        log("2nd fetch .then", res.json)
        return res.json();
    })
    .then((data) => {
        log("3rd fetch .then", data) // logging the json object (now we can use it!)
        seeDogPic(data)
    });

    /* 
     ? JSON (what we used above^)
     - JavaScript Object Notation
        - very lightweight way to store and transfer data
        - "Easy to understand/read" (For us humans)
        - Structured like an object

    Syntax & Structure:
    {
        "key": "values",
        "key": "values",
        "key": 0
    }
    - Everything is wrapped in quotes with minor exceptions ( integers / booleans )
    - Data is all separated with commas
    - CANNOT hold comments or functions

    - .json() method helps to convert our promise into something usable (object)
    */

    // How can we see the dog pic from the fetch though??
    // Build a function wehre we create dom elements, assign them values, and append them to the parent element/html
    let body = document.querySelector("body");

    function seeDogPic(jsonDataFromFetch) {
        log(jsonDataFromFetch);

        // Create elements
        let img = document.createElement("img");

        // Assign img attributes
        img.src = jsonDataFromFetch.message

        // Append
        body.appendChild(img);
    }

    // * JSON.parse(sting)
    let myText = '{ "name": "Gollum", "lost_ring": true }';
    // log(myText);
    // log(JSON.parse(myText));
    let testObj = JSON.parse(myText);
    log(testObj.name);
    testObj.name = "Bilbo";
    log(testObj);

    /* 
The Process:
        1. Fetch your resource which returns a promise
        2. Use a .then() resolver to catch fetches return and assign to a parameter.
        3. use .json() on response to finish reading entire ReadableStream.
        4. Chained another .then() to catch read response object and ..
        5. Build the rest as needed.
            - DOM manipulation
            - use data to process in other functions
            - whatever your project requires.
    Fetch differs from jQuery:
        - The promise returned won't reject on HTTP error status even even if its a 404 or 500 (internal / external server error)
*/

// See another fetch example or two...

const url = "https://meowfacts.herokuapp.com/";

// An example of a fetch in a function

function getCatFact() {
    fetch(url)
        .then((r) => r.json())
        .then((d) => log(d.data[0]));
}

// getCatFact();

// Async/Await Fetch
const getCatFact2 = async () => {
    let res = await fetch(url);
    let result = await res.json();
    let data = result.data[0];
    
    log('In Async/Await: ', data);
}
// log("Checking Data's scope:", data); // Data is scoped only to the fetch and function above, this log will error.
getCatFact2(); // Prints fact to the console


/* 
? Local fetch to (local) json file
    - Project has the data we want to fetch from
*/

function fetchFellowship() {
    fetch("./local.json") // passing our file location
      .then((res) => res.json())
      .then((data) => {
        let members = data.fellowship;
        log(members);
      });
  }
  
  fetchFellowship();


//   * Error Handling with try/catch
// Async/Await
async function getCatFact3() {
    try {
        let response = await fetch(url);
        let results = await response.json();
        let data = results.data[0];
        log("Try block of try/catch:", data)
    } catch (err) {
        console.error(err);
    }
}

getCatFact3()

// * Error Handling with resolvers (.catch())

fetch(url) 
    .then((r) => r.json())
    .then((d) => log("Fetch resolver:", d.data[0]))
    .catch((err) => console.error(err));
