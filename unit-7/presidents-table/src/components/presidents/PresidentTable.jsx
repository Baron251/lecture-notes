// ! Table component, child of Presidents, parent to PresidentRow

import PresidentRow from './PresidentRow'

export default function PresidentTable( presidents, title ) {
  return (
    <>
        <h2>[TITLE OF TABLE]</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Year</th>
                        
                    </tr>
                </thead>
                <tbody>
					
                    <PresidentRow 
					
					/>
                </tbody>
				
            </table>
        
    </>
  )
}

