import React from "react";

function StoreHours(props) {
	return (
		<React.Fragment>
			<ul style={{ listStyleType: "none", textAlign: "center" }}>
				<li>Monday: {props.monday}</li>
				<li>Tuesday: {props.tuesday}</li>
				<li>Wednesday: {props.wednesday}</li>
				<li>Thursday: {props.thursday}</li>
				<li>Friday: {props.friday}</li>
				<li>Saturday: {props.saturday}</li>
				<li>Sunday: {props.sunday}</li>
			</ul>
		</React.Fragment>
	);
}

export default StoreHours;
