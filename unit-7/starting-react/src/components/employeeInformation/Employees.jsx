import EmployeeInfo from "./EmployeeInfo";
import StoreHours from "./StoreHours";

function Employees() {
	let employeeRecords = [
		{
			name: "Jester Bash",
			city: "Miami",
			state: "FL",
			position: "Web Dev",
			food: "Pizza",
		},
		{
			name: "Tom Jones",
			city: "Louisville",
			state: "KY",
			position: "Foreman",
			food: "Steak",
		},
		{
			name: "Janet James",
			city: "New York City",
			state: "NY",
			position: "Barista",
			food: "Brocolli",
		},
		{
			name: "Vink Von",
			city: "Nowhereville",
			state: "Nowhere Land",
			position: "Writer of Nowhere Plans",
			food: "Nothing fruit",
		},
	];

	let storeHours = [
		{
			monday: "open",
			tuesday: "open",
			wednesday: "closed",
			thursday: "closed",
			friday: "open",
			saturday: "open",
			sunday: "closed",
		},
	];
	// ! STOP
	return (
		<>
			<h1>Hello from the Employees!</h1>
			{/* We will be using the above array with the .map() method an EmployeeInfo component for each of each of the objects */}
			{employeeRecords.map((record, index) => (
				// Call the component in the map so each record can be passed in as props
				<EmployeeInfo
					name={record.name}
					city={record.city}
					state={record.state}
					position={record.position}
					food={record.food}
					key={index}
				/>
			))}
			<h1>Store Hours</h1>
			{storeHours.map((day, index) => (
				<StoreHours
					monday={day.monday}
					tuesday={day.tuesday}
					wednesday={day.wednesday}
					thursday={day.thursday}
					friday={day.friday}
					saturday={day.saturday}
					sunday={day.sunday}
                    // Warning: Each child in a list should have a unique "key" prop (see EmployeeInfo `id={index}`)
                    key={index}

				/>
			))}
		</>
	);
}

export default Employees;
