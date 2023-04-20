const router = require("express").Router();
// Access "db" by requireing it in
const db = require("../helpers/db.json");
// FS (file system) library pulled from node. This allows us to manipulate files
const fs = require("fs");

/* 
What parameters are for: 
    - Search parameters
    - Helps us target a specific set of data so that we can find one to update or delete. 
*/

// To Do: build a route to GET one item from the "db"
/* 
Syntax:
  URL: /:id (term for the parameter In our case here its id)
    - The : denotes a parameter value. The endpoint is thus expecting a reference value (to take in a value.)
      ex: if we have a url that ends with /3 then id=3
      ex of full url: http://localhost:4000/routes/1
      - 1 would reference a parameter or flexible string
      - This could be a name of something or anything we want.
      - It all depends on how we build our logic. 
ID's: usually a db will create an id automatically per data item
  - ID's are meant to be a unique value: We target it because it is unique to the data. 
*/
router.get("/:id", (req, res) => {
	//?console.log(req.url); // this will show us our endpoint
	// Detail an object with a key of "id" (which is our parameter name) and the value within the URL we passed to it.
	//?console.log(req.params);
	/* 
        - used to help us locate one item in our database.
        - ID typically has a unique value to help us find that ONE item.
        - Can help us search several items.
        */
	try {
		// use object destructuring so id is equal to our /# (AKA our req.params)
		let { id } = req.params;
		let results = db.filter((i) => i.id == id);
		//? console.log("results: ", results);
		res.status(200).json({
			status: `Found item at id: ${id}`,
			results: results,
		});
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
	// To Do: build a route that can post a new to do list item
});
router.post("/", (req, res) => {
	try {
		// We want to grab data from our req.body (via postman)
		const toDoItem = req.body;
		// 1. The path needs to be be relative to where fs is located (node_modules), NOT from the controllers location.
		//                   1
		fs.readFile("./helpers/db.json", (err, data) => {
			// quick conditional to deal with any error it comes across
			if (err) throw err;
			// Parses the JSON file and provides an array of our objects back so we can manipulate it.
			const db = JSON.parse(data);
			// Push the object supplied by the body to our array
			db.push(toDoItem);
			// Write to our JSON file
			fs.writeFile("./helpers/db.json", JSON.stringify(db), (err) =>
				console.log(err)
			);
			/* 
                  - Requires
                      - route to original file (same pathway as readFile)
                      - what needs to be included or written
                          - We are making out array BACK into a JSON format and stringify-ing it. It requires whatever data we desire.
                      - Callback function to handle errors
              */
			res.status(200).json({
				status: "New item added to db",
				toDoItem,
			});
		});
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
});

//   TODO: Updated (PUT)
/* 
  - pass ID value as a param, /:id (id will become paramter name used inside the logic)
  - iterate through options (look through the db contents, comes back as an array)
  - check if id matches param (if else or other conditional check)
  - reassign the db at the index to what come from body.(take the reuqest body and edit/replace the "incorrect" wrong object we want to change)
  - save file (means using that fs.writeFile to update and save the whole json file/object)

  * stretch goal: update just the data without modifying the ID

  [x] start the route and add the param string
  [x] build the skeleton try/catch
  [] try is success response, grab the param
  [] create logic that uses an array method to find and match the param to a db item
  [] first I need fs to read the file with .read

  */

router.put("/:id", (req, res) => {
	try {
		const id = Number(req.params.id);
		// new values coming in with / via the request
		const todo = req.body;

		fs.readFile("./helpers/db.json", (err, data) => {
			// All the logic I want to build after fs reads the json
			if (err) throw err;
			const db = JSON.parse(data);

			// declare a result variable to assign to later
			let result;

			// using the forEach method to find and then replace the item that matches the param id.
			db.forEach((e, i) => {
				if (e.id === id) {
					// In the if: when match is found we want to be able to replace/ overwrite/ edit the object to the new values.
					// Assign the object to todo(req.body) grabbing the item at its array index and reassigning its value to what we passed in via the request body(todo var)
					db[i] = todo;
					result = todo;
					//Reassign/ assign result variable the todo variable as well (so the response has what the new object content is.)
					fs.writeFile("./helpers/db.json", JSON.stringify(db), (err) =>
						console.log(err)
					);
				}
			});
			// whatever you're testeing ? (this runs if true (200 status good)) : (this runs if false (404/500 status bad))
			result
				? res.status(200).json({
						status: ` ID: ${id} was successfully updated`,
						object: result,
				  })
				: res.status(404).json({ status: `ID: ${id} was not found.` });
		});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});
// TODO: Delete a task
/* 
	- pass ID as a param, Numberified it: const id = Number(req.params.id);
	- read file, fs.readFile()
	- filter to match the param value
		- return what doesn't match
	- write to file, fs.writeFile()
*/
router.delete("/:id", (req, res) => {
	try {
	  const id = Number(req.params.id);
  
	  fs.readFile("./helpers/db.json", (err, data) => {
		if (err) throw err;
  
		// Takes the JSON content from the file location, parse it out into a plain array with normal JS objects instead of JSON objects
		const db = JSON.parse(data);
  
		// declare a var that holds and does all the sorting/filtering logic.
		const filteredDB = db.filter((e) => {
		  // we want to check for the id... and return only what doesn't match
		  if (e.id !== id) {
			return e;
		  }
		});
  
		fs.writeFile("./helpers/db.json", JSON.stringify(filteredDB), (err) =>
		  console.log(err)
		);
  
		res.status(200).json({
		  status: `ID: ${id} was successfully deleted.`,
		});
	  });
	} catch (err) {
	  res.status(500).json({
		error: err.message,
	  });
	}
  });




			module.exports = router;
