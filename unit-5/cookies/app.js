const express = require("express");
const app = express();
const PORT = 4003;
const log = console.log;
const cookieParser = require("cookie-parser");
const db = require("./db.json");

// provides us access to the middleware so that we can see what cookies are stored.
app.use(cookieParser());

// Build a route (GET) to see/test/create a cookie: http://localhost:4003/
app.get("/", (req, res) => {
	// log(req.cookies)

	// Setting some cookie data for our GET response
	res.cookie("cart", [
		{ item: "milk", price: 1.79 },
		{ item: "cheese", price: 2.99 },
		{ item: "dog food", price: 8.98 },
	]);

	// Set cookie data for our GET request
	const check = req.cookies;
	// log(check);
	// log(check.cart);

	let offer;
	// Reminder: Check is not a method, it is the variable declared to request our cookies. `.cart` is the name of the cookie object, and will show us what's in that object
	check.cart.every((obj) => {
		offer = JSON.parse(db).filter((item) => {
			dbItem.item == obj.item && item.price < obj.price;
		});

		if (offer.length > 0) {
			return false;
		}

		return true;

	});
    log(offer);

    if(offer) {
        res.send({
            offer: `Our ${offer[0].dbitem} is ${offer[0].price}!`,
            cookies: check
        })
    } else {
        res.send({
            cookies: check
        });
    }


	// res.send(check.cart);
});

app.listen(PORT, log(`Server is running on PORT: ${PORT}`));
