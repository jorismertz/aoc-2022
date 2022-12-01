// they'd like to know how many Calories are being carried by the
// Elf carrying the most Calories.

const decoder = new TextDecoder("utf-8");
export const input = decoder.decode(await Deno.readFile("input.txt"));

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

export function getTotalCalories(data: string[]) {
  let total = 0;
  data.forEach((value) => {
    const num = parseInt(value);
    total += num;
  });
  return total;
}

function findElveWithMostCalories() {
  let maxCalories = 0;
  let currentElveIndex = 0;
  while (currentElveIndex < caloriesPerElf.length) {
    const currentElveCalories = getTotalCalories(
      caloriesPerElf[currentElveIndex]
    );
    if (currentElveCalories > maxCalories) {
      maxCalories = currentElveCalories;
    }
    currentElveIndex++;
  }
  return maxCalories;
}

console.log("Answer part 1: " + findElveWithMostCalories());
