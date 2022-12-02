import { fileReader } from "../utils/utils.js";

const fileAsArray = fileReader("./input_text.txt");

//convert array to Numbers
const formattedArray = [];
fileAsArray.forEach((item) => {
  formattedArray.push(Number(item));
});

// calArray holds weekly kcal
const calArray = [];

//temp counter pushes to cal Array, resets on 0
let calCounter = 0;
formattedArray.forEach((item) => {
  if (item != 0) {
    calCounter += item;
  }
  if (item === 0) {
    calArray.push(calCounter);
    calCounter = 0;
  }
});

//from line 38 -> 42 is for part two of the question!
var topValue = calArray.sort((a, b) => b - a).slice(0, 3);

const total = topValue.reduce((currItem, item) => currItem + item, 0);

//get max from Array
console.log("Question part one....");
console.log(Math.max(...calArray));

console.log("Question part two....");
console.log(total);
