# Description

Hangman game is favorite game of many yound and old people worldwide.  When user start the game API call to random word generator.User has to guess hidden word and upon every entry of letter, use gets feedback if letter is part of the hidden word or not. Also in case when user successfully guesses letter in the word, position of the letter is displayed on the screen.

In case when user enters the letter that is not part of the hidden word, letter is displayed as wrong. All wrong letters are displayed on the screen. Furthermore, every wrong letter reveals different part of the hangman. In case if user selects same letter more than once, message informing him that letter was previously selected is displayed.

User can make max six wrong guessess before game ends. User can play again by clicking on the button Play again displayed at the end of each game.

## Initialization of the app

To start app enter npm start in terminal.

## Git ignore

If you clone app from the Github please install node-modules to be able to run the app

## Components

There are six different components in the game:
1. Figure.js - for displaying figure of hangman if user makes wrong guess
2. Header.js
3. Notification.js - for informing user in case if he selects the previously selected letter
4. Popup.js - displays final message at the end of each game and enables user to start new game
5. Word.js - gets all letters from the word in array 
6. WrongLetters.js - for storing all wrong letters

## Dependencies

App uses axios for making API call