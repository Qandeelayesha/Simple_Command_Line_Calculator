#! /usr/bin/env node

import inquirer from "inquirer";
console.log("Simple Calculator!!! Please use this...");
const answer = await inquirer.prompt([
  { message: "Enter 1st Num", type: "number", name: "firstNum" },
  {
    message: "Select the one Operator",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Percentage",
      "Modulus",
    ],
  },
  { message: "Enter 2nd Num", type: "number", name: "secNum" },
]);

console.log("Your answer is:");
// Conditional Statements:

if (answer.operator === "Addition") {
  console.log(answer.firstNum + answer.secNum);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNum - answer.secNum);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNum * answer.secNum);
} else if (answer.operator === "Division") {
  console.log(answer.firstNum / answer.secNum);
} else if (answer.operator === "Percentage") {
  console.log((answer.firstNum / answer.secNum) * 100);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNum % answer.secNum);
} else {
  console.log("Please select valid operator!!!");
}

console.log("Thank you for using this calculator!!!");
