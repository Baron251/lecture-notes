// ! Parent component for the table
import PresidentTable from './PresidentTable'
import { presidentsArray } from "./president.constant"

export default function Presidents() {
  // console.log(presidentsArray)
  // Build a function that can filter through the array to check for which have an undefined passed date
  const livingPresidents = presidentsArray.filter(president => {
    return president.passed === undefined;
});

//console.log(livingPresidents); // working as expected

// Build a function to filter Presidents who have passed away.
const deceasedPresidents = presidentsArray.filter(president => {
    return president.passed !== undefined;
})
return (
  <>
      <h2>Hello from Presidents!</h2>
      {/* One pres table of living presidents */}
      <PresidentTable />
         
      {/* One pres table of passed presidents */}
      <PresidentTable/>
  </>
)
}
