//assigning values to each position and for win or lose
const win = 3;
const lose = 0;

//total sum
let totalPoints;

//various plays available
enemyRock = "rock"; //1
enemyPaper = "paper"; //2
enemyScissors = "scissors"; //3
friendRock = "rock";
friendPaper = "paper";
friendScissors = "scissors";

const winnerMap = new Map();
winnerMap.set(friendRock, enemyScissors);
winnerMap.set(friendPaper, enemyRock);
winnerMap.set(friendScissors, enemyPaper);

const loseMap = new Map();
loseMap.set(enemyRock, friendScissors);
loseMap.set(enemyPaper, friendRock);
loseMap.set(enemyScissors, friendPaper);

//read input file
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

let fileAsArray = syncReadFile("./input_text.txt");
const formattedArray = [];

//pass a single game to declare winner and calc points awarded
