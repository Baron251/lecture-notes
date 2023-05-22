import PresidentsRow from "./PresidentsRow";

export default function PresidentsTable({ filtPres }) {
	return (
		<>
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Year</th>
						<th>Passed</th>
					</tr>
					{filtPres.map((president, index) => {
						return (
							<PresidentsRow
								first={president.first}
								last={president.last}
								year={president.year}
								passed={president.passed}
								key={index}
							/>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
