/* 
    Goal of the project: what I want the program to do. (Short synopsis/summary of the project.)

    Needs/To Do list:
    //[X] Declare my global variables
    [X] Declare my global variables
*/

// ---------------------- Global Variables -------------------------

let first;
let second;

// ---------------------- Event Listeners --------------------------

/* 
    =========================================================
        MAIN FUNCTIONALITY OF THE PROJECT (DOM FUNCTION)
    =========================================================
*/

function thisIsMyFunction() {}

/* 
    -------------------- Score Function ----------------------------
    - Take in parameters of player and cardPointValue
    - Need to add to the players score the new points if they answer correctly
    - Need to subtract the points if they answer wrong and pass the question to other player
*/

function updateScore(player, cardValue) {}

/* 
    -------------------- Function for Game Over --------------------
    - when a players score reaches ___________/ when final jeopardy is over: run this function
    - Do a check to see who has the highest score:
        - player with top score
    - a new dom btn to play again
        - click event: reset all names/scores (could be done with a refresh of the page)
        - make sure it ends up back on the home page
*/

function finishGame(playerOne, playerTwo) {
    // Testing parameters
    console.log(playerOne, playerTwo);

    // Building logic with if/else to check score, return winning message in alert or Bootstrap modal
}