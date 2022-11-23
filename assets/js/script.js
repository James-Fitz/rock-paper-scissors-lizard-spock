/** Setting gloabal variables */
const playerChoices = document.getElementsByClassName("choice");
const resultText = document.getElementById("game-result");

const rulesButton = document.getElementById("rules-btn");
const resetButton = document.getElementById("reset-btn");
const playAgainButton = document.getElementById("play-again-btn");

let playerChoice;
let computerChoice;

let playerScore = parseInt(document.getElementById("player-score").innerHTML);
let computerScore = parseInt(document.getElementById("computer-score").innerHTML);

let rulesModal = document.getElementById("rules-modal-content");
let closeModal = document.getElementById("close-modal-btn");

let resultModal = document.getElementById("result-modal-content");
let modalResults = document.getElementById("modal-results");

/** 
 * Function to open modal when rules button is clicked
 */

rulesButton.onclick = () => {
    rulesModal.style.display = "block";
};

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
    const randomChoice = Math.floor(Math.random() * 5);
    return choices[randomChoice];
}

/**
 * Function to display the computers chosen icon in the display box.
 */

function displayComputerChoice() {
    let computerIcon = document.getElementById("display-computer-choice");
    computerIcon.className = `far fa-hand-${computerChoice}`;
    computerIcon.style.display = "block";
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
 * Function to display players chosed icon in the display box.
 */
function displayPlayerChoice() {
    let playerIcon = document.getElementById("display-player-choice");
    playerIcon.className = `far fa-hand-${playerChoice}`;
    playerIcon.style.display = "block";
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
            resultText.innerHTML = `<h2>You Win The Round!</h2>`;
            console.log("Player wins the round");
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
            resultText.innerHTML = `<h2>Computer Wins The Round!</h2>`;
            console.log("Computer wins the round");
            increaseComputerScore();
            break;
        default:
            resultText.innerHTML = `<h2>Draw!</h2>`;
            console.log("Draw");
            break;
    }
    endGame();
}

/** Function that controls the flow of the game.
 * Console logs player choice and computer choice.
 * Runs the getResult function to determine the winner.
 */
function playGame(event) {
    playerChoice = event.target.id;
    computerChoice = getComputerChoice();
    displayPlayerChoice();
    setTimeout(displayComputerChoice, 100);
    getResult();
}

/**
 *  Function to end the game when either player reaches 5 wins or computer reaches 5 wins.
 */
function endGame() {
    if (playerScore === 5) {
        resultModal.style.display = "block";
        modalResults.innerHTML = (`
        <h2>Well Done! You Won!!!</h2>
        <p>Try and Win Some More!</p>`);
        resultModal.style.backgroundColor = "rgba(0, 102, 255, 0.95)";
        noClick();
    } else if (computerScore === 5) {
        resultModal.style.display = "block";
        modalResults.innerHTML = (`
        <h2>Unlucky... You Lose...</h2>
        <p>Don't Give Up, Try Again!</p>`);
        resultModal.style.backgroundColor = "rgba(255, 103, 103, 0.95)";
        noClick();
    }
}

/**
 * Function to reset values and icons on the game area back to the default value.
 */
function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    resultText.innerHTML = `<h2>Waiting for input...</h2>`;
    resultModal.style.display = "none";
    document.getElementById("display-player-choice").style.display = "none";
    document.getElementById("display-computer-choice").style.display = "none";
    resetClick();
}

/* Event listener for reset button click which runs the reset function */
resetButton.addEventListener("click", reset);

/* Event listener for playAgain button click which runs the reset function */
playAgainButton.addEventListener("click", reset);

/**
 * Function to disable clicking on the icons, used when the game ends and result modal is active.
 */
function resetClick() {
    document.getElementById("rock").style.pointerEvents = "auto";
    document.getElementById("paper").style.pointerEvents = "auto";
    document.getElementById("scissors").style.pointerEvents = "auto";
    document.getElementById("lizard").style.pointerEvents = "auto";
    document.getElementById("spock").style.pointerEvents = "auto";
}

/**
 * Function to enable clicking on the icons, used when the play again button is pressed, or the reset button is pressed.
 */

function noClick() {
    document.getElementById("rock").style.pointerEvents = "none";
    document.getElementById("paper").style.pointerEvents = "none";
    document.getElementById("scissors").style.pointerEvents = "none";
    document.getElementById("lizard").style.pointerEvents = "none";
    document.getElementById("spock").style.pointerEvents = "none";
}