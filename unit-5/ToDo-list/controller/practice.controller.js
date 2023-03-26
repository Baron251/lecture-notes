// We need to call on our packaged functionality in order to use it
// Create a variable that imports
const router = require("express").Router();

// Create our first read/GET route
/* 
    - First use our router variable, then detail which type of method we want to use: CRUD methods.
    - To display to the browser, we use a GET method (Read in CRUD)
    - What the Get method needs:
        - the (url/route)pathway noted as a string
        - a callback function to handle the request and response
            - req, res 
    - Browsers always do a GET as default
*/
router.get("/hello-world", (req, res) => {
  res.send("Hello world");
});
/* 
    Challenge
    - Request Type: POST
    - Endpoitn: "greeting"
    - Send: "Good Afternoon"
    - Test: Postman
        * hint: GET should be POST
*/
router.post("/greeting", (req, res) => {
    // Add a status code for us to report any issues/status to the user
    // .status(200)
    res.status(200).send("Good afternoon!");
});



// Goal: Write a route that will pull data from JSON
// https://localhost:4000/practice/json
router.post('/json', (request, response) => {
    // This console log will be printed in my VSC terminal that's running the server
    console.log(request.body);
    // Make a way to print a response in Postman
    const { name } = request.body;
    response.status(200).send(`Hello there, ${name}!`);

});


// Create a "wild card" route to catch any bad routing, Wildcard endpoint
router.get("*", (req, res) => {
  /* 
        - "*": accounts for a "wild card" or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */
  res.status(404).send(`<img src="https://http.cat/404" 
  alt="status code 404"/>`
  );
});


// Exporting the router, gives the file/functionality to other files, makes the contents acessible in other places.
module.exports = router;
