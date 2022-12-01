/* 
Initial thought process -

read in text, deliminate on the skipped lines.
Create and array of each "block"

sum of block == highestCount
if ([i]>highestCount) {
    highestCount = [i];
}

how can it be optimised?
*/

function readInFIle(fileName) {
  const contents = readFileSync(fileName, "utf-8");

  const arr = contents.split(/\r?n/);

  console.log(arr);

  return arr;
}

readInFIle("./input_text.txt");
