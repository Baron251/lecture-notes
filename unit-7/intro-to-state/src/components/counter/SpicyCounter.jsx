// import { useState } from "react";
import './Counter.css'

export default function SpicyCounter({number, setNumber}) {
	

	function increment() {
		setNumber(number + 1);
	}

	function decrement() {
		setNumber(number - 1);
	}

    function random() {
        setNumber(Math.floor(Math.random() * 20 + 1))
    }

	return (
		<div className="counter">
            <h1>Spicy Counter</h1>
			<button onClick={increment}>+</button>
            <button onClick={random}>?</button>
			<button onClick={decrement}>-</button>
            <br />
			<span>{number}</span>
		</div>
	);
}
