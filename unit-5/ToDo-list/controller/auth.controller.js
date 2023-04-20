const router = require("express").Router();

// Build a .post() with the url of /register:
router.post("/register", (req, res) => {
	// ! Test console.logs
	// Check that the middelware is running
	// console.log("\nIn Auth Controller:", req.datePosted, req.timePosted);
	// Check the Headers of the req
	// console.log("Headers:", req.headers);
	// Check the body of the req
	// console.log("Body/content of Req:", req.body);

	try {
		// Dive into the req body and assign values to variables, object destructuring
		const { firstName, lastName, email, password } = req.body;

		res.status(200).send({
			fullName: `${firstName} ${lastName} `,
			email: email,
			// password: password, may not want our password to show...
			date: req.datePosted,
		});
	} catch (err) {
		res
			.status(500)
			.send(`<img src="https://http.cat/500" alt="Status code 500"`);
	}
});


/* 
	Use the URL of the page to query something and get a response

	This has particular syntax(symbols)
	- Anything after the endpoint can be extracted from it.
		ex: /todo/query/?firstName="John"

	Build a query in a GET route:
*/
router.get("/query/", (req, res) => {
	
})
module.exports = router;
