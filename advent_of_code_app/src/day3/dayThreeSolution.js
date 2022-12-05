import { readFileSync } from "fs";

//read in file as standard single element array
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);
  arr.trim;

  return arr;
}

//find point value of each letter
function getLetterValue(letter) {
  if (/[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]/.test(letter)) {
    //lowercase points between value of 1-26
    return letter.charCodeAt(0) - 96;
  } else {
    //upper case points between value of 26-52
    return letter.charCodeAt(0) - 38;
  }
}

//split each array element in to two halves
function compartmentSplit(inputText) {
  const result = inputText.map((line) => {
    line.trim;
    const part1 = [...line.slice(0, line.length / 2)];
    const part2 = [...line.slice(line.length / 2)];

    const part1Set = new Set(part1);
    const crossOver = part2.filter((e) => part1Set.has(e));
    const formattedSet = [...new Set(crossOver)];

    return getLetterValue(formattedSet[0]);
  });

  var finalResult = result.reduce((a, b) => a + b, 0);
  console.log("part one result : " + finalResult);
}

function teamCommonItems(inputText) {
  let totalSum = 0;

  for (let i = 0; i < inputText.length; i += 3) {
    const teams = [
      [...inputText[i]],
      [...inputText[i + 1]],
      [...inputText[i + 2]],
    ];

    // comparing bag 0 to bag 1 for any matching items
    let set = new Set(teams[0]);
    let crossOver = teams[1].filter((x) => set.has(x));

    //comparing final bag (2) to previous matching items
    set = new Set(crossOver);
    crossOver = teams[2].filter((x) => set.has(x));

    //deduplication of items
    let deduplication = [...new Set(crossOver)];

    totalSum += getLetterValue(deduplication[0]);
  }
  console.log("part two result : " + totalSum);
}

let fileAsArray = syncReadFile("./input.txt");

//part 1 solution
compartmentSplit(fileAsArray);

//part 2 solution
teamCommonItems(fileAsArray);
