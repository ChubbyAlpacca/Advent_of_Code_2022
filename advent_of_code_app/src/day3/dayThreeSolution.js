import { readFileSync } from "fs";

let totalSum = 0;

//read in file as standard single element array
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);
  arr.trim;

  return arr;
}

//find point value of each letter
function getLetterValue(letter) {
  if (/[a,z]/.test(letter)) {
    //lowercase points between value of 1-26
    return letter.charCodeAt(0) - 96;
  } else {
    //upper case points between value of 26-52
    return letter.charCodeAt(0) - 38;
  }
}

//split each array element in to two halves
function compartmentSplit(backpack) {
  const result = backpack.map((line) => {
    line.trim;
    const part1 = [...line.slice(0, line.length / 2)];
    const part2 = [...line.slice(line.length / 2)];

    let part1Set = new Set(part1);
    const crossOver = part2.filter((e) => part1Set.has(e));
    const formattedSet = [...new Set(crossOver)];

    return getLetterValue(formattedSet[0]);
  });
  totalSum += result.reduce((a, b) => a + b, 0);
  console.log(totalSum);
}

//loop through

let fileAsArray = syncReadFile("./input.txt");
let bags = compartmentSplit(fileAsArray);
