/* 
    Created a "helpers folder" --> helpers is a common name for helper functions/middleware/etc

    - Middleware is essentailly a function that accesses our request, response, and moves on to other aspects of our code(next).

    - Middleware can be customized to your projects needs
*/

// Create a function called "logTime":
// This will have 3 parameters (request, response, next)
// Run logic in the code block {}

function logTime(req, res, next) {
    // we will only se/get the request obj in the console when we hit "send" in POSTMAN
    // console.log(req);

    // TODO: []It continues after being called, []create a date for when the request was made,[]see/view the request date(from the huge req object)
    // creating a variable date with the Date datatype class constructor
    let date = new Date();
    let time = new Date()
    // The method we're using = creating a string for our local date
     req.datePosted = date.toLocaleDateString();
    req.timePosted = time.toLocaleTimeString();
    
    // Build a console.log to check it's working & show us the time of request
    console.log(
        "Request datePosted key: ",
        req.datePosted,
        "\nTime:",
        req.timePosted
      );
    
      // App continue out of the function and onto what's next
  next();

};


/* 
    - module.exports
        - exporting an object
        - we can make a variety of functions and store them with keys
        - how we can make functionality usable in other places
*/

module.exports = {
    logTime: logTime,
};