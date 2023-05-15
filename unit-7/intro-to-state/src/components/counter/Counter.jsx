import { useState } from "react";
import "./Counter.css";

export default function Counter() {
	const iCount = () => {
		console.log("iCount running each time!");
		return 0; // providing our initial value to useState(what number equals)
	};

	// const [ number, setNumber ] = useState(0);
	// Calling iCount like below will treat iCount like a callback function, a function that only happens once to set the initial value
	const [number, setNumber] = useState(iCount);
	// Calling iCount() like so will re-render it each time the number changes
	// const [ number, setNumber ] = useState(iCount());

	// setNumber( ) is triggering a re-render and will not display until after the process is complete.

	function increment() {
        // An example of how to use prevState w/ prevCount
        // This allows us to view the previous value within the count variable and run the process like before.
        // Can put this in multiple times and will add by however many are read
        setNumber(prevNumber => prevNumber + 1)

		// setNumber(number + 1);
	}

	function decrement() {
        setNumber(prevNumber => prevNumber - 1)

		// setNumber(number - 1);
	}

	function random() {
		setNumber(Math.floor(Math.random() * 20 + 1));
	}

	return (
		<div className="counter">
			<h1>Counter</h1>
			<button onClick={increment}>+</button>
			<button onClick={random}>?</button>
			<button onClick={decrement}>-</button>
			<br />
			<span>{number}</span>
		</div>
	);
}
