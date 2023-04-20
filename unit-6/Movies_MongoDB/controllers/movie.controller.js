const router = require("express").Router();
const Movie = require("../models/movie.model");

// Error Response Function
const errorResponse = (res, error) => {
	return res.status(500).json({
		Error: error.message,
	});
};

//TODO POST
router.post("/", async (req, res) => {
	try {
		const genre = req.body.genre;
		const lowerGenre = genre.toLowerCase();
		//1. Pull data from client (body)
		// const { title, genre, rating, length, releaseYear } = req.body;
		//2. Create a new object using the Model
		const movie = new Movie({
			title: req.body.title,
			genre: lowerGenre,
			rating: req.body.rating,
			length: req.body.length,
			releaseYear: req.body.releaseYear,
		});

		//3. Use mongoose method to save to MongoDB
		const newMovie = await movie.save();

		//4. client response
		res.status(200).json({
			movie: newMovie,
			message: "Success! New Movie Added",
		});
	} catch (err) {
		errorResponse(res, err);
	}
});

//TODO GET One
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/
// http://localhost:4000/movies/643c75c9a0133d71fe143cbb
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const getMovie = await Movie.findOne({ _id: id });

		getMovie
			? res.status(200).json({
					message: `${getMovie.title} was found!`,
					getMovie,
			  })
			: res.status(404).json({ message: `${getMovie.title} was not found` });
	} catch (err) {
		errorResponse(res, err);
	}
});

//TODO Get All

/* 
   Challenge
        - No special endpoing necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

router.get("/", async (req, res) => {
	try {
		// This endpoint will only return all movies, no req or params needed
		// Await all documents from the Movie collection
		const getAllMovies = await Movie.find();

		getAllMovies
			? res.status(200).json({
					message: "All movies from movie collection:",
					getAllMovies,
			  })
			: res.status(404).json({
					message: `No movies found.`,
			  });
	} catch (err) {
		errorResponse(res, err);
	}
});

//TODO Get All by Genre
/* 
   Challenge
        - No special endpoing necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
	try {
		// Grab genre value from parameters
		const { genre } = req.params;

		const lowerGenre = genre.toLowerCase();

		// Finding all movies in DB whose genre matches the params ({db genre key : req.params.genre })
		const getMovies = await Movie.find({ genre: lowerGenre });

		getMovies.length > 0
			? res.status(200).json({
					getMovies,
			  })
			: res.status(404).json({
					message: `No movies found.`,
			  });
	} catch (err) {
		errorResponse(res, err);
	}
});

//TODO PATCH One
router.patch("/:id", async (req, res) => {
	try {
		//1. Pull value from parameter
		const { id } = req.params;
		//2. Pull data from the body.
		const info = req.body;

		//3. Use method to locate document based off ID and pass in new information.
		const returnOption = { new: true };
		//								1		2		3
		//* findOneAndUpdate(query, document, options)
		// returnOptions allows us to view the updated document

		const update = await Movie.findOneAndUpdate(
			{ _id: id }, // 1
			info, // 2
			returnOption // 3
		);

		//4. Respond to client.

		res.status(200).json({
			message: `Movie successfully patched.`,
			update,
		});
	} catch (err) {
		errorResponse(res, err);
	}
});

//TODO Delete One
router.delete("/:id", async (req, res) => {
	try {
		//1. Capture ID
		const { id } = req.params;
		//2. use delete method to locate and remove based off ID
		const deleteMovie = await Movie.deleteOne({ _id: id });
		//3. Respond to Client

		deleteMovie.deletedCount
			? res.status(200).json({
					message: `Successfully deleted the Movie`,
					deleteMovie,
			  })
			: res.status(404).json({
					message: `Could not find movie to delete.`,
			  });
	} catch (err) {
		errorResponse(res, err);
	}
});

module.exports = router;
