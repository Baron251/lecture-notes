import PresidentsTable from "./PresidentsTable";
import { presidentsArray } from "./presidents.constant";

export default function Presidents() {
	// console.log(presidentsArray)
	// Need to separate arrays one for 'alive' one for 'dead'

	// Dead array (use .filter to return new array of dead pres)
	const passedPres = presidentsArray.filter((president) => {
		return president.passed !== undefined;
	});
	// Alive array
	const livingPres = presidentsArray.filter((president) => {
		return president.passed === undefined;
	});
	// console.log("Dead Presidents: ",passedPres, '\n',"Living Presidents: ",livingPres) Returns two arrays
	return (
		<>
			<h1>Hello from Presidents Main</h1>
			<PresidentsTable filtPres={livingPres} />
			<PresidentsTable filtPres={passedPres} />
		</>
	);
}
