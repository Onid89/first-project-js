// Importing the readline module for handling command-line input and output
const readline = require('readline');
// Importing the colors module to add colors to console output
const colors = require('colors');
// Array containing the list of opera houses in Berlin

console.log('September at the Opera'.rainbow.bold); // The program start with words in reinbow color

const operaHouses = [
  { name: 'Staatsoper Unter den Linden' },
  { name: 'Deutsche Oper Berlin' },
  { name: 'Komische Oper in the Schillertheater' },
  { name: 'Neuköllner Oper' },
];
// Array containing the list of operas with more info
const operas = [
  {
    name: 'Tosca',
    date: 'September 06',
    time: '19:30 Uhr',
    price: 73,
    theater: 'Staatsoper Unter den Linden',
  },
  {
    name: 'Messias',
    date: 'September 22',
    time: '19:00 Uhr',
    price: 49,
    theater: 'Komische Oper in the Schillertheater',
  },
  {
    name: 'Carmen',
    date: 'September 01',
    time: '17:00 Uhr',
    price: 52,
    theater: 'Deutsche Oper Berlin',
  },
  {
    name: 'Don Giovanni',
    date: 'September 05',
    time: '19:00 Uhr',
    price: 24,
    theater: 'Deutsche Oper Berlin',
  },
  {
    name: 'Daddy Unplugged',
    date: 'September 07',
    time: '20:00 Uhr',
    price: 26,
    theater: 'Neuköllner Oper',
  },
  {
    name: 'Subtonik',
    date: 'September 22',
    time: '20:00 Uhr',
    price: 25,
    theater: 'Neuköllner Oper',
  },
  {
    name: 'Il Barbiere Di Siviglia',
    date: 'September 07',
    time: '19:00 Uhr',
    price: 38,
    theater: 'Staatsoper Unter den Linden',
  },
  {
    name: 'Bovary - StaatsBallet Berlin',
    date: 'September 08',
    time: '19:00 Uhr',
    price: 15,
    theater: 'Deutsche Oper Berlin',
  },
];
// the function listOperaHouses, print a list of all Opera Houses in Berlin (using Magenta color)
function listOperaHouses() {
  console.log('List of Opera Houses in Berlin:'.bgMagenta);
  operaHouses.forEach((operaHouse) =>
    console.log(`* ${operaHouse.name}`.magenta)
  );
}
// the function listOperasInSeptember, print all the operas staged in September and more info (using different color for name - date - time and theater).
function listOperasInSeptember() {
  console.log(
    'List of Operas staged in September with date and start time:'.blue
  );
  operas.forEach((operas) =>
    console.log(
      `* 🎭${operas.name.green}: 🗓 ${operas.date.yellow},⌚${operas.time.cyan} at 🎼${operas.theater.magenta} Price💰${operas.price}€`
    )
  );
}

// Function to display a random opera from the list
function randomOpera() {
  const randomIndex = Math.floor(Math.random() * operas.length);
  console.log(
    `Random Opera: 🎭${operas[randomIndex].name.green} at 🎼${operas[randomIndex].theater.magenta} on 🗓 ${operas[randomIndex].date.yellow} at ⌚${operas[randomIndex].time.cyan} Price💰${operas[randomIndex].price}€`
  );
}

// Function to filter and list operas based on price range
function filterOperasByPrice(minPrice, maxPrice) {
  const filteredOperas = operas.filter(
    (operas) => operas.price >= minPrice && operas.price <= maxPrice
  );
  console.log(`Operas between ${minPrice} € and ${maxPrice} €:`.bgBlue);
  filteredOperas.forEach((operas) =>
    console.log(
      `* 🎭${operas.name.green} at 🎼${operas.theater.magenta} on 🗓 ${operas.date.yellow} at ⌚${operas.time.cyan} Price💰${operas.price}€`
    )
  );
}
// Function to add a new opera house to the list
function addOperaHouse(name) {
  listOperaHouses;
  operaHouses.push({ name });
  console.log(`Added new opera house: ${name}`.blue);
}
// Function to remove an opera house from the list by name
function removeOperaHouse(name) {
  const index = operaHouses.findIndex((operaHouse) => operaHouse.name === name);
  if (index !== -1) {
    operaHouses.splice(index, 1);
    console.log(`Removed opera house: ${name}`.red.strikethrough);
  } else {
    console.log(`Opera house not found: ${name}`.red.bold);
  }
}
// readline interface used for command line inpunt and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// setting the prompt for user input
rl.setPrompt('Opera Info >'.brightCyan);
rl.prompt();
// user input line by line
rl.on('line', (line) => {
  const args = line.split(' ');
  const command = args.shift();

  switch (command) {
    case 'list':
      listOperaHouses();
      break;
    case 'operas':
      listOperasInSeptember();
      break;
    case 'random':
      randomOpera();
      console.log('🎩 Enjoy the show 💫'.yellow.bold);
      break;
    case 'filter':
      if (args.length !== 2) {
        console.log('Usage: filter <minPrice> <maxPrice>');
        break;
      }
      const minPrice = parseInt(args[0]);
      const maxPrice = parseInt(args[1]);
      if (isNaN(minPrice) || isNaN(maxPrice)) {
        console.log('Invalid price format. Please use numbers.');
        break;
      }
      filterOperasByPrice(minPrice, maxPrice);
      break;
    case 'add':
      const name = args.join(' ');
      addOperaHouse(name);
      break;
    case 'remove':
      const removeName = args.join(' ');
      removeOperaHouse(removeName);
      break;
    default:
      console.log(
        'Unknown command!!! Please Try : "list", "operas", "random", "filter", "add", or "remove"'
          .grey.bold.underline
      );
  }
  rl.prompt();
});
