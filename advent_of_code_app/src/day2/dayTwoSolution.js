import { readFileSync } from "fs";

//assigning values to each position and for win or lose
const win = 3;
const lose = 0;

//total sum
let totalPoints;

//various plays available
// a = "rock"; //1
// b = "paper"; //2
// c = "scissors"; //3
// x = "rock";
// y = "paper";
// z = "scissors";

const winnerMap = new Map();
winnerMap.set(a, z);
winnerMap.set(b, x);
winnerMap.set(c, y);

// const loseMap = new Map();
// loseMap.set(enemyRock, friendScissors);
// loseMap.set(enemyPaper, friendRock);
// loseMap.set(enemyScissors, friendPaper);

function getWinnerMap() {
  return winnerMap;
}

//read input file
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

let fileAsArray = syncReadFile("./input.txt");
const formattedArray = [];

//creating formatted array with each game as one element
fileAsArray.forEach((item) => {
  formattedArray.push(item);
});

//loop through array
//make each "game" an array with the elements being each persons move?
// toString each game and deliminate on the space
//check against map
//add score to total Sum
//return sum

console.log(formattedArray[2]);
