/** Setting gloabal variables */
const playerChoices = document.getElementsByClassName("choice");
const resultText = document.getElementById("game-result");

const rulesButton = document.getElementById("rules-btn");
const resetButton = document.getElementById("reset-btn");
const startButton = document.getElementById("start-btn");
const playAgainButton = document.getElementsByClassName("play-again-button");

let playerChoice;
let computerChoice;

let playerScore = parseInt(document.getElementById("player-score").innerHTML);
let computerScore = parseInt(document.getElementById("computer-score").innerHTML);

let rulesModal = document.getElementById("rules-modal-content");
let closeModal = document.getElementById("close-modal-btn");

let winModal = document.getElementById("you-win-modal");
let loseModal = document.getElementById("you-lose-modal");

/** 
 * Function to open modal when rules button is clicked
 */

rulesButton.onclick = () => {
rulesModal.style.display = "block";
}

/** 
 * Function to close modal when close button is clicked
 */

closeModal.onclick = () => {
    rulesModal.style.display = "none";
}
/** 
 * Creates an array of all possible choices
 * Generates a random number between 0 and 4
 * Return computer choice from the array */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * 5)
    return choices[randomChoice];
}

/** 
 * Loop through all player choices.
 * Once the player clicks a choice
 * playGame function will run
 */
 for (let choice of playerChoices) {
    choice.addEventListener('click', playGame);
}

/**
 * Function to increase player score by one.
 */
function increasePlayerScore() {
    document.getElementById("player-score").innerHTML = ++playerScore;
}

/**
 * Function to increase computer score by one.
 */
function increaseComputerScore() {
    document.getElementById("computer-score").innerHTML = ++computerScore;
}

/**
 * Function that determines the result of the player choice vs the computer choice.
 * Outputs resultTest to display to user who won.
 * Increases the score of the winner by one.
 * Runs the endGame function once the round result is determined.
 */
function getResult() {
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockscissors':
        case 'spockrock':
            resultText.innerHTML = 'You Win The Round!';
            console.log("player wins the round");
            increasePlayerScore();
            break;
        case 'scissorsrock':
        case 'lizardrock':
        case 'rockpaper':
        case 'spockpaper':
        case 'paperscissors':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'scissorsspock':
        case 'rockspock':
            resultText.innerHTML = 'Computer Wins The Round!';
            console.log("computer wins the round");
            increaseComputerScore();
            break;
        default:
            resultText.innerHTML = 'Draw!';
            break;
    }
    endGame();
    console.log(playerScore);
    console.log(computerScore);
}

/** Function that controls the flow of the game.
 * Console logs player choice and computer choice.
 * Runs the getResult function to determine the winner.
 */
 function playGame(event) {
    playerChoice = event.target.id;
    computerChoice = getComputerChoice();
    console.log(`Player choice is ${playerChoice}`);
    console.log(`Computer choice is ${computerChoice}`);
    getResult();
}

/**
 *  Function to end the game when either player reaches 5 wins or computer reaches 5 wins.
 */
 function endGame() {
    if (playerScore === 5) {
        console.log("Player wins");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").innerHTML = 0;
        document.getElementById("computer-score").innerHTML = 0;
        winModal.style.display = "block";
    } else if (computerScore === 5) {
        console.log("Computer wins");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").innerHTML = 0;
        document.getElementById("computer-score").innerHTML = 0;
        loseModal.style.display = "block";
    }
}

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    resultText.innerHTML = "";
}
);

playAgainButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    resultText.innerHTML = "";
}
);