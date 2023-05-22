import MovieCreate from "./MovieCreate";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function MovieIndex() {
	return (
		<>
			<Container>
				<Row>
					<Col md="4">
						<MovieCreate />
					</Col>
					<Col md="8">
						[TABLE GOES HERE!]
					</Col>
				</Row>
			</Container>
		</>
	);
}
