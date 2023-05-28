import "./App.css";
import Auth from "./components/auth/Auth";
import MovieIndex from "./components/movie/MovieIndex";
import MovieEdit from "./components/movie/MovieEdit";
import Logout from "./components/auth/logout/Logout";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	// Use useState to house token
	const [sessionToken, setSessionToken] = useState("Sample Token");

	// console.log("App.jsx: ", sessionToken);

	const updateToken = (newToken) => {
		localStorage.setItem("token", newToken);
		// ^ .setItem(key, value)
		setSessionToken(newToken);
	};

	// Use useEffect so the session token will not be reset if the page refreshes
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setSessionToken(localStorage.getItem("token"));
		}
	}, []);

	// Create routing using the Routes tag with the Route tags holding the individual components/view
	// Add Logout so it is visible only when there *IS* a session token
	return (
		<div className="App">
			{sessionToken !== "" ?
			<Logout setToken={setSessionToken}/> : null	
		}
			<Routes>
				<Route path="/" element={<Auth updateToken={updateToken} />} />
				<Route path="/movie" element={<MovieIndex token={sessionToken} />} />
				<Route
					path="/movie/update/:id"
					element={<MovieEdit token={sessionToken} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
