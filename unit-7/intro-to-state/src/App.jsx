// Make sure to first import useState from React!
import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Welcome from "./components/welcome/Welcome";
import Counter from "./components/counter/Counter";
import SpicyCounter from "./components/counter/SpicyCounter";
import AddUser from "./components/addUser/AddUser";

function App() {
	// const name = "Tiny Doggo"

	//  keyword [ variable, function ] = hook(initial value);
	// const [ name, setName ] = useState("Frodo")
	// const [names, setName] = useState([
	//   "Frodo", "Sam", "Pippin", "Merri"
	// ]);

	const [names, setName] = useState([]);

	const [number, setNumber] = useState(0);

	// Build a function that will map and display a welcome per hobbit (This will return a welcome component per hobbit)
	const displayWelcome = () => {
		return names.map((name, index) => {
			// Per name we use return so each name gets a component returned
			// Passing the whole names array and setNames functionality to the child component Welcome
			// This will allow us to change the array in the child component
			return (
				<Welcome
					key={index}
					name={name}
					names={names} // pass the full array as props
					setName={setName} // passing our setName function
				/>
			);
		});
	};

	return (
		<div className="App">
			<Nav />
			{/* <AddUser  names={names} setName={setName} /> */}
			{/* <Welcome name={name} /> was replaced by the mapping function above(displayWelcome)*/}
			{names.length > 0 ? (
				displayWelcome()
			) : (
				<div>
					<h1 style={{ textAlign: "center" }}>Add a New User!</h1>
					<AddUser names={names} setName={setName} />
				</div>
			)}
			<Counter />
			<SpicyCounter number={number} setNumber={setNumber} />
		</div>
	);
}

export default App;
