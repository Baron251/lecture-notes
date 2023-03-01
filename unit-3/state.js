/* 
?   Lookup Tables & State Machines
    * Lookup Table:
    - Objects that help us reference other values, great when working with collections of data.
    - Often called dictionaries, Objects work like dictionaries in JS, holding key value pairs to store collections of data.
    Lookup Table == Object/Dictionary
    
    These can help with/Why:
    - Make the code cleaner and easier to read
    - Eliminated branching of conditionals by creating a simpler lookup
    - Default evaluation does not need to wait for all conditions to get processed. If a key does not exist in the lookup table, it returns the default condition straightaway. 
    - Good for evaluating multiple rules/two or more conditions
*/

// Create an arrow function named listGames with a parameter of system
const listGames = (system) => {
    // build a collection object
    let collection = {
      Nintendo: ["Duck Hunt", "The Legend of Zelda", "Super Mario Bros."],
      "Super Nintendo": ["Super Mario World", "F-Zero", "Star Fox"],
      Nintendo64: ["Super Mario 64", "Mario Kart 64", "GoldenEye 007"],
    };
  
    //console.log("Inside Function: ", collection["Nintendo64"]);
  
    return collection[system];
  };
  
  console.log(listGames("Nintendo64"));
  console.log(listGames("Super Nintendo"));
  console.log(listGames("Nintendo"));
  console.log(listGames("Nope")); // Undefined if no match
  
  // Another Example:
  
  const stateAbbreviation = {
    alaska: "ak",
    delaware: "de",
    hawaii: "hi",
    indiana: "in",
    vermont: "vt",
  };
  
  const acronym = {
    asap: "as soon as possible",
    fomo: "fear of missing out",
    gif: "graphics interchange format",
    lol: "laugh out loud",
  };
  
  // console.log(stateAbbreviation[hawaii]);
  // Create a findIt function that will use whatever object(dict) and key term(search) give and return the value result if found
  function findIt(dict, search) {
    return dict[search];
  }
  
  let stateInUS = findIt(stateAbbreviation, "vermont");
  console.log(stateInUS.toUpperCase());
  
  let acro = findIt(acronym, "gif");
  console.log(acro);
  
  // An example with else ifs (conditionals) versus table lookup:
  // We have to take of a kiddo based on how they feel
  
  // function howIsChild with parameter name of state that returns messages based on the kids status
  const howIsChild = (state) => {
    if (state == "Hungry") {
      return "THE KIDS WANTS FOOD, WHERE'S THE SNACKS!?!";
    } else if (state == "Sad") {
      return "The kiddo is crying, what do we do??";
    } else if (state == "Happy") {
      return "Aww, they're laughing!";
    } else {
      return "They're asleep.";
    }
  };
  
  console.log(howIsChild("Happy"));
  console.log(howIsChild());
  
  // Use a table and arrow function to do the above:
  const kidFeelsTable = {
    Hungry: "THE KIDS WANTS FOOD, WHERE'S THE SNACKS!?!",
    Sad: "The kiddo is crying, what do we do??",
    Happy: "Aww, they're laughing!",
  };
  
  const howIsKiddo = (state) => kidFeelsTable[state] || "They're sleeping...";
  
  console.log(howIsKiddo("Happy"));
  console.log(howIsKiddo());
  
  /* 
      * State Machines:
      - A state machine reads a set of inputs and changes to a different state based on those inputs.
      - A mathematical model of computation, usually used to design algorithms.
      State: is the set of all variables in a program and their values at any point in time.
      A simple example: A light switch.
      - The light switch has two states: on and off
      - Flipping the switch will transition to the other state
      - When the "machine" exits the on state, we get a side effect of the light turning off.
      - When the "machine" enters the on state, we get a side effect of the light turning on.
          https://statecharts.dev/on-off-state-machine.html
      A state machine is an alternative way of modeling program state: Instead of defining independent variables, a machine is crafted specifically to handle what states are possible, and when a machine is a given state, what next state is allowed. (from https://statecharts.dev/what-is-a-state-machine.html)
  */
  
  // Build a traffic light state machine:
  // create a state object with light color keys with values of an array to the other light color options
  
  let state = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"],
  };
  
  let currentState = "green";
  
  // Create a function to handle and transition between states
  function enterState(newState) {
    // Create a check to see what values are valid and available
  
    // Establish which point in our state object that we want to reference
    let validTransitions = state[currentState];
  
    console.log(`\nThe light is currently: ${currentState}`);
  
    // Check if our key includes the state the user wants to transition/change to
    if (validTransitions.includes(newState)) {
      // Allow our state to change if true to next state
      currentState = newState;
      return `The light turns ${currentState}`;
    } else {
      // Have a message if state is not available
      // console.log("Invalid state!");
      // use throw to stop, state, and define an error
      throw `Invalid state: ${currentState} to ${newState}`;
    }
  }
  
  let changeToYellow = enterState("yellow");
  console.log(changeToYellow);
  
  let changeToRed = enterState("red");
  console.log(changeToRed);
  
  let changeToGreen = enterState("green");
  console.log(changeToGreen);
  
  let brokenLight = enterState("red");
  console.log(brokenLight);