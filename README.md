# first-project-js

**First idea**

- 1 Create a list with all the Opera houses in Berlin.
- 2 Create a list with all the operas that will be staged in September with date and start time.
- 3 there are too many operas production available to watch in September , so we leave it up to chance with a randoom choice .

## **Starting with the Project**

- readlineSync installed : npm i readline-sync (Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).) https://www.npmjs.com/package/readline-sync

- colors.js installed: npm i colors (makes the terminal more colorful) https://www.npmjs.com/package/colors

- Importing the readline module: const readline = require('readline');

- 1 List with Opera House in Berlin .
- 2 Objects in Array with specific opera event (name , date, time , price , theater).
- 3 Function with a list that print all the Opera houses in Berlin.
- 5 Function with random that print an opera random to the list.
- 6 Function -Filter to find the price from min to max .
- 7 Fuction to add Opera house with .push
- 8 Function to remove an Opera house with .splice The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- 9 Create a `readline`interface for reading input and writing output.
- 10 setting promt and displaying it .
- 11 add commands with switch statement -> switch statement evaluates the command variable and executes corresponding functions for each case.
- 12 at the and of the code the command rl.prompt() -> rl.prompt() is called again to display the prompt, allowing the user to input the next command.

## Some Instruction and how to use the terminal

- open the terminal and run -> Node + theater.js(file)
- digit the command : list (print the list with all the Opera houses in Berlin)
- digit the command : operas ( print a list with all the opera staged in september with more info)
- digit the command : random ( print a random opera that you can watch in September)
- digit the command : filter ( print opera with price filter for example(Between 10€ and 30€ )).
- digit the command : add + name (functiont to add a new opera house).
- digit the command : remove + name (function to remove an opera house).
