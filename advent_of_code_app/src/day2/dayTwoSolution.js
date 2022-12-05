import { fileReader } from "../utils/utils.js";

//assigning values to each position and for win or lose
const winPoints = 6;
const drawPoints = 3;
const losePoints = 0;

//total sum
let playerPoints = 0;
let opponentPoints = 0;

//various plays available
const a = "rock"; //1
const b = "paper"; //2
const c = "scissors"; //3
const x = "rock";
const y = "paper";
const z = "scissors";

//helper funcions
const playScoreAdder = (play) => {
  switch (play) {
    case "A":
      opponentPoints += 1;
      break;
    case "B":
      opponentPoints += 2;
      break;
    case "C":
      opponentPoints += 3;
      break;

    case "X":
      playerPoints += 1;
      break;

    case "Y":
      playerPoints += 2;
      break;

    case "Z":
      playerPoints += 3;
      break;
  }
};

const winPlayer = (play) => {
  playerPoints += 6;
};

const draw = () => {
  playerPoints += 3;
  opponentPoints += 3;
};

const losePlayer = () => {
  opponentPoints += 6;
};

const winOpponent = () => {
  opponentPoints += 6;
};

const drawOpponent = () => {
  opponentPoints += 6;
};

const loseOpponent = () => {
  opponentPoints += 6;
};

const formattedArray = [];
const gameArray = [];
const fileAsArray = fileReader("./input.txt");

// creating formatted array with each game as one element
fileAsArray.forEach((item) => {
  formattedArray.push(item);
});

//populate gameMap
fileAsArray.forEach((item) => {
  let itemSplit = item.split(" ");
  gameArray.push(itemSplit);
});

gameArray.map((value) => {
  //win cases
  if (value[0] === "A" && value[1] === "Z") {
    console.log(value[0], value[1], "you win (player Rock, Opponent scissors)");
    winPlayer();
    playScoreAdder("A");
    playScoreAdder("Z");
  }
  if (value[0] === "B" && value[1] === "X") {
    console.log(value[0], value[1], "you win (player paper, Opponent Rock)");
    winPlayer();
    playScoreAdder("B");
    playScoreAdder("X");
  }

  if (value[0] === "C" && value[1] === "Y") {
    console.log(value[0], value[1], "you win(player scissors, Opponent paper)");
    winPlayer();
    playScoreAdder("C");
    playScoreAdder("Y");
  }
  //lose cases
  if (value[0] === "A" && value[1] === "Y") {
    console.log(value[0], value[1], "you Lose (player Rock, Opponent Paper)");
    losePlayer();
    playScoreAdder("A");
    playScoreAdder("Y");
  }
  if (value[0] === "B" && value[1] === "Z") {
    console.log(
      value[0],
      value[1],
      "you Lose (player paper, Opponent scissors)"
    );
    losePlayer();
    playScoreAdder("B");
    playScoreAdder("Z");
  }

  if (value[0] === "C" && value[1] === "X") {
    console.log(value[0], value[1], "you Lose(player scissors, Opponent Rock)");
    losePlayer();
    playScoreAdder("C");
    playScoreAdder("X");
  }

  //Draw Cases
  if (value[0] === "A" && value[1] === "X") {
    console.log(value[0], value[1], "you Draw (Opponent Rock, player Rock)");
    draw();
    playScoreAdder("A");
    playScoreAdder("X");
  }
  if (value[0] === "C" && value[1] === "Z") {
    console.log(
      value[0],
      value[1],
      "you Draw (Opponent Scissors, player Scissors)"
    );
    draw();
    playScoreAdder("C");
    playScoreAdder("Z");
  }
  if (value[0] === "B" && value[1] === "Y") {
    console.log(value[0], value[1], "you Draw (Opponent Paper, player Paper)");
    draw();
    playScoreAdder("B");
    playScoreAdder("Y");
  }
  console.log({ player: playerPoints, opponent: opponentPoints });
});

// console.log({ player: playerPoints, opponent: opponentPoints });
