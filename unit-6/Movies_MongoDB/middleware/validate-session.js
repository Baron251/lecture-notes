// Bring in JWT to access it's token methods/functionality
const jwt = require("jsonwebtoken");
// Bring in our User model to reference
const User = require("../models/user.model");

const errorResponse = (res, error) => {
	return res.status(500).json({
		Error: error.message,
	});
};

// Secrets kept are weapons wasted
const SECRET = process.env.JWT;
// Build our middleware function
const validateSession = async (req, res, next) => {
	// Middleware still has access to the request, response, and requires the next() function to move past it.
	//* remember the timeLog() helper within the ToDo_List

	try {
		//1. Take token provided by request object (headers.authorization)
		const token = req.headers.authorization;
		// console.log(token);
		//2. Check the status of token. (expired?)
		const decodedToken = jwt.verify(token, SECRET);

		const user = await User.findById(decodedToken.id);
		if (!user) throw Error("User not found");
		// Create a new key within our req(request) object with our user information
		req.user = user
		// console.log(req.user._id)
	} catch (err) {
		errorResponse(res, err);
	}

	//3. Provide response - if valid, generate a variable that holds user info.

	// Good idea to just check with a console.log that it's working

	return next(); // moves us onto our routes/endpoint
};

// Export the function
module.exports = validateSession;
