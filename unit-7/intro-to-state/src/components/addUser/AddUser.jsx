import { useState } from "react";

export default function AddUser({ names, setName }) {
	// console.log(names);
	// We need a state to store the input text value
	const [text, setText] = useState(() => "");
	// console.log(text)

	// We need to build the functionality to handle the change
	const handleChange = (e) => {
		// console.log(e);
		setText(e.target.value);
	};

	// We need to build the functionality to actually submit the text value, eventually it should be added to our names array, handleSubmit()
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("HandleSubmit Function Called!")
		// console.log(names)

		// Gain access to the names array
		let addUser = [...names];
		// Add a name/the input value to the array: use the text state variable
		addUser.push(text);
		// Use setName to change the names array for the whole app, aka replacing the old array w/ the new one
		setName(addUser);
		// console.log("Add User: ", addUser)
		console.log("Names ", names)
		setText('');
	};

	return (
		<form
			// Create how the form can call the handleSubmit function
			onSubmit={(e) => handleSubmit(e)}
		>
			<input
				// Create how input can call/use handleChange function
				onChange={(e) => handleChange(e)}
				// Connect the input text to our state text
				value={text}
			/>
			<br />
			<input type="submit" value="Add" />
		</form>
	);
}
