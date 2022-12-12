import { fileReader } from "../utils/utils.js";

let totalSum = 0;
// read in file no need to split on line etc
// const file = fileReader("input.txt");

function packetSniffer(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ([i] == [j]) {
        totalSum = totalSum += 1;
      } else {
        continue;
      }
    }
    console.log(totalSum);
    return totalSum;
  }
}

function splitToCharArray(array) {
  console.log({ array });
  var formattedArray = [];
  for (let i = 0; i < array.length; i++) {
    const chunk = array.slice(i, i++);
    console.log({ chunk });
    formattedArray.push(chunk);
  }
  console.log({ formattedArray });
}

const rawInput = fileReader("input.txt");
splitToCharArray(rawInput);
