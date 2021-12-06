// import readlinesync library and chalk package
var readlineSync = require("readline-sync");
var chalk = require("chalk");

// console.log("    \t" + chalk.white.bgYellow.italic("Welcome to the" + chalk.green.bgBlue.bold("AvengerVerse") + "Quiz!"));

var userName = readlineSync.question("What's your good name?: ");

console.log(
    chalk.bold.bgWhiteBright.black.italic(
      "\n Welcome to The Avengers Quiz!, "+ chalk.bgCyanBright(userName.toUpperCase()) +
      ". \n"
    ))

var avengers_question_bank = [
  {
    "question": "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n",
    "answer": "B",
    "option1": 2005,
    "option2": 2008,
    "option3": 2010,
    "option4": 2012
  },
  {
    "question": "At the end of Doctor Strange, the titular character uses the Time Stone to trap a villain in a time loop. Who is the villain?\n",
    "answer": "A",
    "option1": "Dormammu",
    "option2": "Red Skull",
    "option3": "Mad Titan",
    "option4": "The Reckoning"
  },
  {
    "question": "What is the name of Thor’s hammer?\n",
    "answer": "B",
    "option1": "Vanir",
    "option2": "Mjolnir",
    "option3": "Aesir",
    "option4": "Norn"
  },
  {
    "question": "In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?\n",
    "answer": "B",
    "option1": "That he wants to study The Hulk",
    "option2": "That he knows about S.H.I.E.L.D.",
    "option3": "That they are putting a team together",
    "option4": "That Thaddeus owes him money"
  },
  {
    "question": "Before Thanos, which other character tries to get his hands on all the Infinity Stones?\n",
    "answer": "A",
    "option1": "Taneleer Tivan/The Collector",
    "option2": "Loki",
    "option3": "Hela",
    "option4": "Nakia"
  }, 
  {
    "question": "In Iron Man 2, Tony Stark saves a child wearing an Iron Man mask from a drone. Who is this child?\n",
    "answer": "C",
    "option1": "Pietro Maximoff",
    "option2": "Hawkeyes son",
    "option3": "Peter Parker",
    "option4": "Peter Quill"
  },
  {
    "question": "What is Captain America’s shield made of?\n",
    "answer": "B",
    "option1": "Adamantium",
    "option2": "Vibranium",
    "option3": "Promethium",
    "option4": "Carbonadium"
  }
]

var score = 0;

function quiz(question, answer, a, b, c, d, i) 
{
  var userAnswer = readlineSync.question("Q" + (i+ 1) + ". " + question + "\nA. " + a + "\nB. " + b + "\nC. " + c + "\nD. " + d + "\n\nYour Answer: ");
  if (userAnswer.toLocaleUpperCase() === answer) {
    console.log(chalk.bgGreen.bold(">> Correct! Answer"));
    score = score + 1;
  }
  else
  {
    console.log(chalk.bgRed.bold(">> Wrong! Answer"));
  }
  console.log("\n ------------------------");
  console.log(chalk.white.bgMagenta.bold(' Current Score: ' + score + " \n"));
  
}


for (i=0; i<avengers_question_bank.length; i++) {
    var current = avengers_question_bank[i];
    quiz(current.question, current.answer, current.option1, current.option2, current.option3, current.option4, i)

  }

// print final score stating number of right answers.

console.log(userName + ", Your Final Score is: " + score + ".\nYou gave " + score + " right answers out of " + avengers_question_bank.length + '.\n')

console.log("Check out the high scores below, \nif you should be there send me screenshot of your score and I w'll love to update it.")

var highest_score = [
  {
    "name": "Puneet",
    "score": 10
  },
  {
    "name": "Vishalbhai",
    "score": 8
  },
  {
    "name": "Lovely dad",
    "score": 7
  }
]

for (i=0; i<3; i++) {
  console.log(highest_score[i].name + ": " + highest_score[i].score);
  if (score > highest_score[i].score) {
    console.log("Congrats! You have beaten record of " + highest_score[i].name)

  }
}