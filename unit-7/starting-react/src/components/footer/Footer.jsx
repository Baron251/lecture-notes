/* 
    - Write a function that exports a single h6 element with a copyright.
    - Type in the current year.
    - Export the component.
    - Import the component within App.jsx
    - Mount at the bottom of the JSX being returned in App.jsx.

    Bonus: Make the year dynamic so it is not hard coded and will change after this year.
*/
function Footer() {
    // We can create any logic we like inside the function and before the return
    // let name = "Vaughn";
    let time = new Date()
    let when = time.getFullYear()

    return(
        <footer>
           CopyRight&copy;{when}
        </footer>
    )
    
}

export default Footer;