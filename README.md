# 🎭 Opera-project-js 🎭

**🤔 First idea**

- 1 Create a list with all the Opera houses in Berlin.
- 2 Create a list with all the operas that will be staged in September with date and start time.
- 3 there are too many operas production available to watch in September , so we leave it up to chance with a randoom choice .

## 📜 **Description**

This JavaScript code was created with a passion for theater and opera. Its purpose is to provide people with a clear and simple way to discover the available shows in Berlin during a specific time of the year. In this case, September was chosen, a month rich with operatic offerings in the German capital.

**Program Features**
List of Opera Houses:

- The program provides a list of major opera houses in Berlin, displaying their names in a colorful and engaging way.

Operas Scheduled in September:

- It allows users to view all operas scheduled in September, with details on name, date, time, theater, and price. Each piece of information is presented in different colors for better readability.

Random Opera Selection:

- For those who want to leave it to chance, the program includes a function that randomly selects an opera from those available, providing a detailed description of the chosen opera.

Price Filtering:

- Users can filter operas based on a specified price range, allowing them to find shows that fit within their budget.

Managing Opera Houses:

- It is possible to add new opera houses to the existing list or remove existing ones, thus keeping the list of theaters up to date.

**Project Motivation**

- This code was developed to help theater and opera enthusiasts navigate the vast cultural offerings of Berlin. With a simple and intuitive interface, the program allows users to explore different options and make informed decisions about which shows to see. The random selection feature adds an element of surprise and fun, inviting users to discover new operas and theaters.

**What we need to install**

- Node.js is a JavaScript runtime that allows you to execute JavaScript outside of the browser. npm (Node Package Manager) comes with Node.js and helps you manage dependencies. https://nodejs.org/en

- readlineSync installed : npm i readline-sync (Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).) https://www.npmjs.com/package/readline-sync

- colors.js installed: npm i colors (makes the terminal more colorful) https://www.npmjs.com/package/colors

## 📐**Starting with the Project**

- Importing the readline module: const readline = require('readline');
- Importing the colors module: const colors = require('colors');

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

## ⌨ Some Instruction and how to use the terminal

- open the terminal and run -> Node + theater.js(file)
- digit the command : list (print the list with all the Opera houses in Berlin)
- digit the command : operas ( print a list with all the opera staged in september with more info)
- digit the command : random ( print a random opera that you can watch in September)
- digit the command : filter ( print opera with price filter for example(Between 10€ and 30€ )).
- digit the command : add + name (functiont to add a new opera house).
- digit the command : remove + name (function to remove an opera house).

## © Credits

**Developed with 💙 by Gerardo M. Mussuto**
