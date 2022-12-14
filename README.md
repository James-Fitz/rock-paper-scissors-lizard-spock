# **Rock Paper Scissors Lizard Spock**  

![Am i responsive image](readme-images/responsive.webp)  

<br>

**Live site can be found** [HERE](https://james-fitz.github.io/rock-paper-scissors-lizard-spock/)  

<br>

## **Introduction**  

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

## **Table of Contents**
- [**Rock Paper Scissors Lizard Spock**](#rock-paper-scissors-lizard-spock)
  - [**Introduction**](#introduction)
  - [**Table of Contents**](#table-of-contents)
  - [**UX**](#ux)
  - [**Wireframe**](#wireframe)
  - [**Features**](#features)
  - [**Testing**](#testing)
  - [**Technology Used**](#technology-used)
  - [**Deployment**](#deployment)
  - [**Credits**](#credits)

## **UX**  

I wanted to utilize a very simple, clear UX for this project.  

There are no overpowering graphics or colors in this project.  

The page opens up on the rules modal which clearly states the rules for the player.  

The icons are clear and easily distinguished by the user.  

When the player hovers over an icon, it will increase slightly in scale and change to a blue color. This feature makes it clear which icon the user is choosing.  

When the player wins a round it is clearly stated in blue that the player has won.  
When the computer wins a round, it is clearly stated in red that the computer has won the round.  
If there is a draw, the draw text will be displayed in yellow.  
The three different colors for the three different outcomes make it very easy for the user to identify the results of each round.  

If the player wins the game, a blue modal pop up will inform the user of their victory.  
If the player loses the game, a red modal pop up will display the losing message.  

<details><summary>Target Audience</summary>  

- Fans of the Big Bang Theory.
- Anyone that enjoys a simple game of chance.

</details>

<details><summary>User Experience and Expectations</summary>  

- Simple game to play.
- Clear instructions and rules.
- Simple design and easy navigation.
- intuative design where results and outcomes are easily identified.
- Interactive controls.
- Responsive site that adjusts depending on the users device.

</details>

<details><summary>Color Palette</summary>  

I chose very simple colors for this project to ensure the design was simple, clear and easy for the user to differentiate between 
player/computer, and win/loss.  

I chose the classic blue versus red color scheme to denote the player versus computer respectively.

The blue color has been used throughout the project to show the user choices and victory for the user.
The red color has been used throughout the project to show the computer choices and the computer victory.

![Image of color palette used](readme-images/color-palette.webp)  

</details>  

<details><summary>Font</summary>  

I chose a clean, simple font to maximise readability and ensure a positive user experience.  

![Image of font used](readme-images/font.webp)    

</details>   

## **Wireframe**    

I kept the wireframe design simple as I wanted this project to be clear, to the point and simple to understand/read.  
The wireframe design is very similar to the finished project.  

<details><summary>Opening Home Page</summary>  

- Opening home page  
![Image of wireframe homepage](readme-images/wireframe-homepage.webp)  

</details>  

<details><summary>Game Screen</summary>  

- Game Screen  
![Image of wireframe game screen](readme-images/wireframe-game-screen.webp)  

</details>  

<details><summary>Win Screen</summary>  

- Win screen  
![Image of wireframe win screen](readme-images/wireframe-win-screen.webp)  

</details>  

<details><summary>Mobile View</summary>  

- Mobile view  
![Image of wireframe mobile screen](readme-images/wireframe-mobile.webp)  

</details>  


## **Features**    

I kept the features simple and straight forward for this project. 

<details><summary>Rules Modal</summary>  

The rules modal is displayed as soon as the page is loaded.  
This ensures that the user will be presented with the rules immediately and will understand how the game works.  
The modal contains a small description of the game, the parameters for winning, and an image containing all the outcomes for each selection made.

![Rules image modal popup](readme-images/rules-modal.webp)  

</details>

<details><summary>Header</summary>

A simple header with icons corresponding to the relevent choices available in the game.

![Image of header](readme-images/header.webp)  

</details>

<details><summary>Gameplay Screen</summary>

This is the main gameplay area.  
The players choice icon is displayed in the blue box.  
The computers choice icon is displayed in the red box.  
The scores are displayed above the colored boxes. 

![Image of gameplay screen](readme-images/gameplay-screen.webp) 

</details>

<details><summary>Round Results Area</summary>

The function to display the result is on a 200ms delay to simulate a more realistic rock paper scissors game.  
There are four different options that can be displayed in the round results area.  

- "Waiting for input" is the default string that is displayed.
- "Computer wins the round!" is displayed when the computer wins a round.
- "You win the round!" is displayed when the player wins a round.
- "Draw!" is displayed when the computer and player make the same choice.

![Image of round results area](readme-images/round-results.webp)  

<br>

There is also a 150ms delay on the functions to display the icons that were chosen by the user and computer. This was done to simulate a more realistic game, rather than instantaneous choices being made and displayed.  

When the player wins, the win round message is displayed and the players score is increased by one.  
![Image of round results area when player wins](readme-images/round-win.webp)  

<br>

When the computer wins, the computer wins message is displayed and the computers score is increased by one.  
![Image of round results area when player losses](readme-images/round-loss.webp)  

<br>

When there is a draw result, the draw message is displayed and neither scores are increased.  
![Image of round results area when there is a draw](readme-images/round-draw.webp)  

<br>

</details>

<details><summary>Player Choice Icons</summary>

There are five choices that the player can make. Each icon will increase in size and change to blue when the player hovers over it.

![Image of icons for player to choose from](readme-images/icon-choice-area.webp)  

</details>

<details><summary>Extra Buttons</summary>

There are two buttons underneath the gameplay area.

- The rules button will display a modal pop up with the rules for the game.
- The reset button will reset all of the gameplay area to it's default values.

![Image of buttons at the bottom of screen](readme-images/buttons.webp)  

</details>

<details><summary>Results Modals</summary>

- This modal pop up is displayed when the user reaches five round wins and wins the game.  
![Image of win results modal](readme-images/win-modal.webp)  

<br>

- This modal pop up is displayed when the computer reaches five round wins and wins the game.  
![Image of lose results modal](readme-images/lose-modal.webp)  

</details>  

<details><summary>Future Features</summary>  

- Implementation of a landing page in a future version, which contains the rules and a start game button which navigates the user to the gameplay page.  
- Implementation of a scored tracking system that will keep track of the overall ammount of games that the player and computer have won.  

</details>  

## **Testing**  

<details><summary>Devices used</summary>  

The page was tested using the following devices:  

- Huawei Matebook Pro  
- Apple iPhone 8 plus  
- Huawei Mate 20 Pro  

No issues with responsiveness, appearance or functionality were noted on any of the devices.  

The page was tested using the following browers:  

- IOS Safari Mobile Browser  
- Android 12.0 Mobile Browser  
- Google Chrome  
- Mozilla Firefox  
  
No issues with responsiveness, appearance or functionality were noted while using any of the browsers above. 

</details>  

<details><summary>Responsiveness</summary>  

The application has been tested on multiple devices and at multiple screen width to ensure responsive design at all levels.
Media queries were used at lower screen widths to ensure the application stays responsive.
The display icon boxes were moved to a vertical stack to ensure they can still be viewed at lower screen width.

- Responsiveness of ipad mini screen  
![Image of iPad screen width](readme-images/ipad-responsive.webp)  

- Responsiveness of 320px screen width  
![Image of 320px screen width responsiveness](readme-images/320-responsive.webp)  

- iPhone 8  
![iPhone 8 responsiveness](readme-images/iphone-responsiveness.webp)  

- Huawei Mate 20 Pro  
![Huawei Mate 20 Pro Responsoveness](readme-images/huawei-responsiveness.webp)  

<br>

</details>  

<details><summary>Console Testing</summary>  

No errors occur in the console while the game is being played.  
All buttons were tested and all are working as intended.  

![Gif of console testing](readme-images/console-testing.gif)  

</details>

<details><summary>Validator Testing</summary>   

HTML Validator Result    
![Image of html validator results](readme-images/html-validator.webp)  

<br> 

CSS Validator Result  
![Image of css validator results](readme-images/css-validator.webp)    

<br>

Javascript Validator Results  
![Image of javascript validator results](readme/../readme-images/js-validator.webp)  

</details>  

<details><summary>Lighthouse Testing</summary>  

Lighthouse Result  
![Image of lighthouse test results](readme-images/lighthouse-results.webp)  

</details>  

<details><summary>Known Bugs and Errors</summary>  

<br>

There is a bug that occurs when the user clicks a selection rapidly at the end of the game.  
If either the computer or the player reaches a score of 5, the game result modal will pop up to end the game, however, there is a small window between the final result and the endgame function which allows the user to click again and increase their score beyond the 5 maximum limit.  
As this doesn't affect normal gameplay and only occurs when the user rapidly spams the icon selection at the end of the game, I have chosen to leave this bug in the game.  

<br>

![Gif displaying scoring bug](readme-images/score-bug.gif)  

<br>

</details>  

## **Technology Used**   
<details><summary>Programs Used</summary>  

- [Gitpod](https://www.gitpod.io/)
- [Github](https://github.com/)  
- Google Chrome Dev Tools  
- [Google Fonts](https://fonts.google.com/)
- [Fontawesome](https://fontawesome.com/)
- [EZGif](https://ezgif.com/video-to-gif)
- [Balsamiq](https://balsamiq.com/wireframes/?gclid=CjwKCAiA7IGcBhA8EiwAFfUDsedt1_yntzPRVIkvCMNi08x47L8fqx7EzPM2G05MqCNkcgb9mdIPPBoCQ7EQAvD_BwE)
- [Image.online-convert](https://image.online-convert.com/convert-to-webp)
- [Am I Responsive?](https://ui.dev/amiresponsive)
- Validators  
  - [HTML](https://validator.w3.org/)  
  - [CSS](https://jigsaw.w3.org/css-validator/)
  - [Javascript](https://jshint.com/)  

  

</details>  
<details><summary>Languages Used</summary>  

- HTML5
- CSS
- Javascript
  
</details>  

## **Deployment**  

<details><summary>Github Pages</summary>  

1. Navigate to the required repository on GitHub.
2. Click settings at the right hand side of the navigation bar.
3. Click "Pages" located under the "Code and automation" heading on the left hand side of the screen.
4. Select "Main Branch" as the source and click save.
5. The live link can take a few minutes to become available, and will be located at the top of the pages page.

</details>  

<details><summary>How to Clone</summary>  

1. Navigate to the required repository on GitHub.  
2. Click the "Code" button, located below the nav bar and above the file list.  
3. Select either "HTTPS", "SSH" or "Github CLI" and click the copy button.  
4. Open Git Bash.  
5. Change the location of your cloned repository.  
6. Type <code>git clone</code> and then paste the URL you copied.  
7. Press ???Enter??? to create your clone.  
   
<br>  

</details>  

<details><summary>How to Fork</summary>  

1. Navigate to the required repository on GitHub.
2. Click "Fork" on the top right hand corner of the page.
3. Click "Create Fork" at the bottom of the page.

</details>  

## **Credits**  

<details><summary>Media</summary>  

- Favicon image taken from [Freepik](https://www.flaticon.com/free-icon/rock-paper-scissors_6729743?term=rock%20paper%20scissors&page=1&position=15&page=1&position=15&related_id=6729743&origin=tag)  

- Rules image taken from [Big Bang Theory Wiki page](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)  

- All gameplay icons taken from [FontAwesome](https://fontawesome.com/)  

</details>  

<details><summary>Code</summary>  

- [W3Schools](https://www.w3schools.com/) - Used to learn about modals and extra features for JS functions such as arrow functions, pointer events, switch cases and timeout function delays.  

- Help with code from the tutors at Code Institute tutor support and mentor Chris Quinn.  

</details>  