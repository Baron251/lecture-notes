import { useRef } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom'
import FullButton from '../../buttons/FullButton'

export default function Login({ updateToken }) {
	// Build our refs
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	// Start base handleSubmit
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("HI", emailRef.current.value)

		// Build my body obj (request body)
		let body = JSON.stringify({
			email: emailRef.current.value,
			password: passwordRef.current.value,
		});
		
		// Declare and init our url
		const url = "http://localhost:4000/user/login";

		// Try/catch = fetch w/ request options in fetch
		try {
			const res = await fetch(url, {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				body: body,
			});
			const data = await res.json();
			// console.log(data)

			// Pass the data token value to my updateToken
			// If the server sends a success message we can update token and route to movie, if not we will get an alert
			if(data.message === `Login Successful!`) {
                updateToken(data.token)
                navigate('/movie');
				alert(`Welcome ${data.user.firstName}`)
            } else {
                alert(data.message);
            }
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<h2>Login</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label>Email</Label>
					<Input
						placeholder="Email"
						innerRef={emailRef}
						type="email"
						autoComplete="off"
					/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input
						placeholder="Password"
						innerRef={passwordRef}
						type="password"
						autoComplete="off"
					/>
				</FormGroup>
				<FullButton>
				<Button type="submit">Login</Button>
				</FullButton>
			</Form>
		</>
	);
}
