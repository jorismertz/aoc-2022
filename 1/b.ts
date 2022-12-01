// Find the top three Elves carrying the most Calories.
// How many Calories are those Elves carrying in total?

import { input, getTotalCalories } from "./a.ts";

const caloriesPerElf: string[][] = [];

const calories = input.split("\n");
let currentArr: string[] = [];
calories.forEach((calorie) => {
  if (calorie !== "") {
    currentArr.push(calorie);
  } else if (calorie === "") {
    caloriesPerElf.push(currentArr);
    currentArr = [];
  }
});

function getTotalForAllElves() {
  const totals: number[] = [];
  let currentElveIndex = 0;
  while (currentElveIndex < caloriesPerElf.length) {
    const currentElveCalories = getTotalCalories(
      caloriesPerElf[currentElveIndex]
    );

    totals.push(currentElveCalories);
    currentElveIndex++;
  }
  return totals;
}

const sorted = getTotalForAllElves().sort((a, b) => b - a);

const combinedTopThree = sorted.slice(0, 3).reduce((a, b) => a + b);

console.log("Answer part 2: " + combinedTopThree);
