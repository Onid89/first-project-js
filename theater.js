// Importing the readline module for handling command-line input and output
const readline = require('readline');
// Importing the colors module to add colors to console output
const colors = require('colors');
// The program start with words in reinbow color
console.log('September at the Opera'.rainbow.bold);

// Array containing the list of opera houses in Berlin
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
    synopsis:
      '"Tosca" is a gripping opera by Giacomo Puccini set in Rome in 1800. It tells the story of the passionate singer Floria Tosca, her lover, the painter Mario Cavaradossi, and the corrupt police chief, Baron Scarpia. A tale of love, jealousy, and political intrigue, "Tosca" is renowned for its dramatic music and emotional intensity.',
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
    synopsis:
      'Georges Bizet’s "Carmen" features one of opera’s most captivating heroines. Carmen\'s character is multifaceted: ' +
      'she can be seen as a seductress, a symbol of forbidden yearning, an anarchist, or a seer of her own fate who fears nothing. ' +
      'This versatility makes her a mirror reflecting societal norms. Bizet challenged Romantic opera with a naturalistic portrayal ' +
      "of a proletarian world filled with poverty and crime, contrasting sharply with conventional opera settings. Don José's obsession " +
      'with Carmen leads him into a spiral of misery and crime, away from a stable life with Micaëla. The bullfighting scene epitomizes ' +
      'the clash between feminine and masculine, bourgeois and anarchist principles, symbolizing a brutal survival of the fittest.',
  },

  {
    name: 'Don Giovanni',
    date: 'September 05',
    time: '19:00 Uhr',
    price: 24,
    theater: 'Deutsche Oper Berlin',
    synopsis:
      'Wolfgang Amadeus Mozart and Lorenzo da Ponte\'s "Don Giovanni" is based on the Spanish legend of Don Juan. ' +
      'This opera, their second collaboration after "Le Nozze di Figaro," elevated Don Giovanni to mythical status, ' +
      'inspiring numerous interpretations and philosophical analyses by figures like E.T.A. Hoffmann and Søren Kierkegaard. ' +
      'The opera is renowned for its memorable musical pieces, including arias, the famous overture, and various ensembles. ' +
      "The story begins with Don Giovanni's womanizing career well underway. His valet, Leporello, notes that Giovanni has seduced " +
      '1,003 women in Spain alone. Despite the risks, Giovanni continues his pursuits. After being caught with Donna Anna, he kills ' +
      'her father in a duel and flees. He is then pursued by Anna, her fiancé Don Ottavio, and his former lover Donna Elvira. ' +
      "His next target is Zerlina, whom he attempts to seduce on her wedding day. Giovanni's relentless provocations lead him to his inevitable downfall.",
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
    synopsis:
      'The wealthy Count Almaviva has won the heart of the beautiful Rosina under the pseudonym »Lindoro«. But Rosina’s jealous guardian Dr Bartolo wishes to marry his ward himself and so tries to keep her suitors away. Fortunately, »Lindoro« is helped by the cunning barber Figaro, who – more or less ingeniously – weaves a web of entanglements and masquerades. The 23-year-old Rossini composed »Il barbiere di Siviglia« in just three weeks. Witty, fiery and vibrant, it is a masterpiece of Italian opera buffa, in which, as is so often the case, the old man in disguise hoodwinks everyone. Rossini was inspired by the 1772 play »La Précaution inutile ou le Barbier de Séville« by the French poet, secret agent and arms smuggler Pierre-Augustin Caron de Beaumarchais, which tells the backstory of Mozart’s »Le nozze di Figaro«. Rossini’s humorously drawn characters, the brilliant solo parts, rousing melodies and fast-paced ensembles fully unfold in Ruth Berghaus’s timeless production from 1968 (with young Achim Freyer’s innovatively simple stage design). Bursting with life and situation comedy, it has lost nothing of its youthful freshness and vitality after over 350 performances.',
  },
  {
    name: 'Bovary - StaatsBallet Berlin',
    date: 'September 08',
    time: '19:00 Uhr',
    price: 15,
    theater: 'Deutsche Oper Berlin',
    synopsis:
      'Gustave Flaubert’s novel "Madame Bovary," published in 1856, is a seminal work in world literature that contributed to the rise of modernism. The story centers on Emma Bovary, a young country woman dissatisfied with her mundane provincial life and unambitious husband. Longing for passion and luxury, she engages in extramarital affairs and accumulates massive debts, ultimately leading to her tragic downfall and suicide. The term "Bovarism," derived from Emma Bovary’s character, describes a condition where one escapes reality through excessive fantasies.Christian Spuck’s ballet adaptation of "Madame Bovary" for the Staatsballett Berlin eschews traditional narrative forms in favor of abstract choreography and psychological exploration. This production delves into themes of female self-determination, escapism, and the catastrophic merging of fantasy with reality, using poetic imagery and refined humor to bring the characters inner worlds to life through dance.',
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
  const randomOpera = operas[randomIndex];
  console.log(
    `Random Opera: 🎭${operas[randomIndex].name.green} at 🎼${
      operas[randomIndex].theater.magenta
    } on 🗓 ${operas[randomIndex].date.yellow} at ⌚${
      operas[randomIndex].time.cyan
    } Price💰${operas[randomIndex].price}€ \n🔎 ${
      randomOpera.synopsis || 'Sorry No synopsis available.'.cyan
    }`
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
rl.setPrompt('Opera Info ➡'.brightCyan);
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
