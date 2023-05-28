// Signup is child of Auth.jsx, import below
import Signup from "./signup/Signup";
// Login is child of Auth.jsx, import below
import Login from "./login/Login";
// Container is ReactStraps resizing div with grid rows and columns
// https://getbootstrap.com/docs/5.3/layout/grid/ explains bootsraps column and row container resizing system
import { Col, Container, Button, Row } from "reactstrap";
import { useState } from "react";
import FullButton from "../buttons/FullButton";

export default function Auth(props) {
	// useState to hold button's state login/signup
	const [button, setButton] = useState("Signup");

	// function to switch button from login to signup with setButton
	const swapForm = () => {
		button === "Login" ? setButton("Signup") : setButton("Login");
	};

	// function that changes the display
	// Ternary checks if button is set to Login, if true see signup if false see login
	const displayForm = () => {
		return button === "Login" ? (
			<Container>
				<Row>
					<Col md="6">
						<Signup updateToken={props.updateToken} />
					</Col>
				</Row>
			</Container>
		) : (
			<Container>
				<Row>
					<Col md="6">
						<Login updateToken={props.updateToken} />
					</Col>
				</Row>
			</Container>
		);
	};
	// return will hold button that controls swapping
	return (
		<>
			<FullButton>
				<Button onClick={swapForm} color="dark">
					{button}
				</Button>
				{displayForm()}
			</FullButton>
		</>
	);
}
