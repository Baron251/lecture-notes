/* 
   - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/

import './AboutMe.css';

function AboutMe() {

    const city = "Montpelier";
    const state = "Vermont";

    let styles = {
        ul: {
            textAlign: "left",
            color: "green"
        },
        p: {
            fontSize: "20pt"
        }
    }

    return(
        <div>
            {/* <p>{city}, {state}</p> */}
            <p style={styles.p}>{city + ", " + state}</p>
            {/* <ul style={{textAlign: "left", color: "blue"}}> */}
            <ul style={styles.ul}>
                <li>Buddy's Famous</li>
                <li>State House Lawn</li>
                <li>Bed</li>
            </ul>
        </div>
        
    )
}

export default AboutMe;