TIC TAC HACK!!!

Welcome to the CYBER PUNK inspired version of  TIC TAC TOE!!

Overview
TIC TAC HACK is a variation of TIC TAC TOE as a Hacking Game.
For a successful “Hack” you need to win the game ie with 3 X or O in a row.
You play as "Hacker 1", and  Hacker2 is player 2. Ideally the end goal is to play
against 'AI' to hijack the system
Successful "Hack" will display’ Hack Success: Access Granted”

If lost against CPU AI (if possible to implement) message will be “Access Denied”

FEATURES Wishlist:
-Ability to Select 2 Player or 1 Player vs AI /CPU
-fix messages to display as HTML
-AI Levels of Difficulty Easy/Normal/Hard/Imposibru!
-Trigger Audio/Voice for all warnings, unsuccessful hacks, successful hacks etc.
-Audio for Game Start/Reset
-change colours to blue
-Animate illumination changes in color when buttons clicked
-Graphics Improvements
-scalable for Phones


Some (rough) Pseudo Code:

STRUCTURE


HTML Body text

CSS Styling


JS LOGIC



Game flow:

Player 1 “X”

Player 1 Win: “Hack Success: Access Granted”

Player 1 Fail;  “Security Breach Detected:’Access Denied!”

Graphics and Interface : Cyber Attack  3d top level Front End)


JS LOGIC

Game logic is simply tic tac toe with “Forever Alone Mode" playing 2 player with oneself.


Select 2 player or One player  

Button “Hacker1”

Button “Hacker2”

9x9 Grid.

If player one successful: Human Player wins" hack SUCCESSFUL Access Granted



 Game flow logic :
 Start with an empty cells on the game grid (gameBoard)

 Alternate turns between Player1 and Player 2.


Player 1 goes first*

(Possible to make this random or if timed: if player 1 doesn't mark a cell, player 2 will start.)

 GamePlay LOGIC

Loop alternate turns between the two players.
((Player  ID Screens Iluminate between players? ))

 Player one marks a cell with X
 Const  player1 = X
 const  player2 = 0

Player1 markCell
check to see if player1 has marked  a cell//has player1 marked a cell? //
if player1 markCell === true
 Switch to player2
  Else "waiting for player1"

user input: player2 markCell()
if player2 markCell === true  Else "waiting for player 2"


check Game State: have all cells been marked?
   "Do a check " loop through the array to check


Check cells for marked Cell:
Check for win combo state"
loop through array?
disable marked cell before next turn.

PC
if cell is marked
check for marked cell.
is cell marked?
if yes,  disable.

player 2 turn...


if all cells are filled:

check win state:
check winning combinations:

player 1 wins = alert: ""
player2 wins  = alert:""
draw = alert = alert:''


reset game.


FEATURES



POST MORTEM
Positives: Generally happy but frustrated as I stil dont know a lot about Javascript.
Needed help to figure out certain aspects of the code
Became painfully aware of my limitations of coding knowlege
Need to still get familiar with Javascript and JQuery

CSS is still annoying.

Want to keep working on the project

```
