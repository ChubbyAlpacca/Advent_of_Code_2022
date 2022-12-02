import { readFileSync } from "fs";

//File reader for txt split on new lines
export function fileReader(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}
