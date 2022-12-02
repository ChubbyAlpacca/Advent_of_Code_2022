#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// console.log(chalk.bgGreen("Merry Christmas!!!"));

let userName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Merry Christmas!");

  await sleep();
  rainbowTitle.stop();
}

async function askName() {
  const answer = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "the Grinch";
    },
  });
}

await welcome();
await askName();
