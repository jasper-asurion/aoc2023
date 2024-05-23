import fs from "node:fs";
import path from "node:path";

function sum(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result = result + num;
  }
  return result;
}

const filePath = "./part1.txt";
const correctPath = path.resolve(__dirname, filePath);

const fileAsString: string = fs.readFileSync(correctPath).toString().trim();
const lines: string[] = fileAsString.split("\n");

const numberMap: Record<string, number> = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "0": 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

const numberArray: number[] = [];
for (const line of lines) {
  const regex = /(\d|one|two|three|four|five|six|seven|eight|nine|zero)/g;
  const matches = line.match(regex);

  if (matches === null || matches.length <= 0) {
    throw new Error("You did something wrongm, no match found in your regex");
  }

  const firstDigit = matches[0];
  const lastDigit = matches[matches.length - 1];

  console.log(lastDigit, numberMap[lastDigit]);

  const finalDigits = "" + numberMap[firstDigit] + numberMap[lastDigit];
  numberArray.push(parseInt(finalDigits));
}

console.log("Final Answer", sum(numberArray));
