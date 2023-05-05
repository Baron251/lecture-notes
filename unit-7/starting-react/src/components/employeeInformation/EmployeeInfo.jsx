// Import keyword to create the variable React to call on the package 'react' functionality
import React from "react";

function EmployeeInfo(props) {
	// console.log(props.name)
	return (
		// See react.md line 93
		<React.Fragment>
			<ul style={{ listStyleType: "none", textAlign: "left" }}>
				<li>From: {props.city}, {props.state}</li>
				<li>Position: {props.position}</li>
				<li>Favorite Food: {props.food}</li>
			</ul>
		</React.Fragment>
	);
}

export default EmployeeInfo;
