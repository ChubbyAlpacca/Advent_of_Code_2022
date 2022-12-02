//assigning values to each position and for win or lose
const win = 3;
const lose = 0;

//total sum
let totalPoints;

//various plays available
enemyRock = "rock";
enemyPaper = "paper";
enemyScissors = "scissors";
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

//pass a single game to declare winner and calc points awarded
function sum(a, b) {
  return a + b;
}

export default sum;
