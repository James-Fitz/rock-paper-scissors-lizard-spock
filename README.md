# Rock Paper Scissors Lizard Spock

## Introduction

Rock paper scissors lizard spock was first introduced to the world in The Big Bang Theory. 

It is a game of chance, just like to original rock paper scissors game, with some added variables.
The rules are very straight forward, as stated by Sheldon in the Big Bang Theory:
> "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors > decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."
>

The game I have created takes the users input, determines a random selection for the computer and displays the selection of both player and computer and outputs the result of each round to the user.

The scores are displayed above the corresponding screen for player and computer.

The score is incremented after each win/loss.

The game will end when either the player or the computer reaches a score of 5.  

<br>

<img src="assets/images/readme-images/responsive.webp" alt="Am i responsive image" width="700">

<br>

Live site can be found [HERE](https://james-fitz.github.io/rock-paper-scissors-lizard-spock/)  

## Table of Contents
- [Rock Paper Scissors Lizard Spock](#rock-paper-scissors-lizard-spock)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [UX](#ux)
    - [UX Introduction](#ux-introduction)
    - [Color Palette](#color-palette)
    - [Font](#font)
    - [Wireframe](#wireframe)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Lighthouse Result](#lighthouse-result)
  - [Technology Used](#technology-used)
    - [Programs Used](#programs-used)
    - [Languages Used](#languages-used)
  - [Deployment](#deployment)
    - [Github Pages](#github-pages)
    - [How to Clone](#how-to-clone)
    - [How to Fork](#how-to-fork)
    - [How to Make Local Clone](#how-to-make-local-clone)
  - [Credits](#credits)
    - [Media](#media)
    - [Code](#code)

## Features

<details><summary>Rules Modal</summary>

The rules modal is displayed as soon as the page is loaded. 

This ensures that the user will be presented with the rules immediately and will understand how the game works.

<img src="assets/images/readme-images/rules-modal.webp" alt="Rules image modal popup" width="500">
</details>

<details><summary>Header</summary>

A simple header with icons corresponding to the relevent choices available in the game.

<img src="assets/images/readme-images/header.webp" alt="Image of header" width="500">

</details>

<details><summary>Gameplay Screen</summary>

This is the main gameplay area.  
The players choice icon is displayed in the blue box.  
The computers choice icon is displayed in the red box.  
The scores are displayed above the colored boxes. 

<img src="assets/images/readme-images/gameplay-screen.webp" alt="Image of gameplay screen" width="500">

</details>

<details><summary>Round Results Area</summary>

There are four different options that can be displayed in the round results area.

- "Waiting for input" is the default string that is displayed.
- "Computer wins the round!" is displayed when the computer wins a round.
- "You win the round!" is displayed when the player wins a round.
- "Draw!" is displayed when the computer and player make the same choice.

<img src="assets/images/readme-images/round-results.webp" alt="Image of round results area" width="500">  

<br>

When the playeer wins, the win round message is displayed and the players score is increased by one.  
<img src="assets/images/readme-images/round-win.webp" alt="Image of round results area when player wins" width="500">   

<br>

When the computer wins, the computer wins message is displayed and the computers score is increased by one.  
<img src="assets/images/readme-images/round-loss.webp" alt="Image of round results area when player losses" width="500">  

<br>

When there is a draw result, the draw message is displayed and neither scores are increased.  
<img src="assets/images/readme-images/round-draw.webp" alt="Image of round results area when there is a draw" width="500">  

<br>

</details>

<details><summary>Player Choice Icons</summary>

There are five choices that the player can make. Each icon will increase in size and change to blue when the player hovers over it.

<img src="assets/images/readme-images/icon-choice-area.webp" alt="Image of icons for player to choose from" width="500">

</details>

<details><summary>Extra Buttons</summary>

There are two buttons underneath the gameplay area.

- The rules button will display a modal pop up with the rules for the game.
- The reset button will reset all of the gameplay area to it's default values.

<img src="assets/images/readme-images/buttons.webp" alt="Image of buttons at the bottom of screen" width="500">

</details>

<details><summary>Results Modals</summary>

- This modal pop up is displayed when the user reaches 5 round wins and wins the game.  
<img src="assets/images/readme-images/win-modal.webp" alt="Image of win results modal" width="500">  

<br>

- This modal pop up is displayed when the computer reaches 5 round wins and wins the game.  
<img src="assets/images/readme-images/lose-modal.webp" alt="Image of lose results modal" width="500">  

</details>

<details><summary>Future Features</summary>

- Implementation of a landing page in a future version, which contains the rules and a start game button which navigates the user to the gameplay page.
- Implementation of a scored tracking system that will keep track of the overall ammount of games that the player and computer have won.
</details>

## UX
### UX Introduction
I wanted to utilize a very simple, clear UX for this project. 
The page opens up on the rules modal which clearly states the rules for the player.
### Color Palette 
### Font
### Wireframe

## Testing
### Validator Testing

HTML Validator Result  
<img src="assets/images/readme-images/html-validator.webp" alt="Image of html validator results" width="500">  

<br> 

CSS Validator Result  
<img src="assets/images/readme-images/css-validator.webp" alt="Image of css validator results" width="500">  


### Lighthouse Result

Lighthouse Result  
<img src="assets/images/readme-images/lighthouse-results.webp" alt="Image of lighthouse test results" width="500">  

## Technology Used
### Programs Used
### Languages Used

## Deployment
### Github Pages
### How to Clone
### How to Fork
### How to Make Local Clone

## Credits

### Media

Favicon image from [Freepik](https://www.flaticon.com/free-icon/rock-paper-scissors_6729743?term=rock%20paper%20scissors&page=1&position=15&page=1&position=15&related_id=6729743&origin=tag)

Rules image taken from [Big Bang Theory Wiki page](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

Icons taken from [FontAwesome](https://fontawesome.com/)

### Code

[W3Schools](https://www.w3schools.com/) - Used to learn about modals and extra features for JS functions.

Help with code from Slack, tutor support and mentor Chris Quinn.