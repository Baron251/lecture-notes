export default function PresidentsRow({ first, last, year, passed }) {
	return (
		<>
			<tr>
				<td>{first}</td>
				<td>{last}</td>
				<td>{year}</td>
				<td>{passed === undefined ? "Still alive" : passed}</td>
			</tr>
		</>
	);
}
