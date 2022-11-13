/** Setting gloabal variables */
const playerChoices = document.getElementsByClassName("choice");
const resultText = document.getElementById("game-result");

let playerChoice;
let computerChoice;

let playerScore = parseInt(document.getElementById("player-score").innerHTML);
let computerScore = parseInt(document.getElementById("computer-score").innerHTML);

/** 
 * Creates an array of all possible choices
 * Generates a random number between 0 and 4
 * Return computer choice from the array */
 function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * 5)
    return choices[randomChoice];
}