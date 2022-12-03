import { backpacks, alphabet } from "./a.ts";

const groups: string[][] = [];
let points = 0;

for (let i = 0; i < backpacks.length; i += 3) {
  const groupMembers = backpacks.slice(i, i + 3);

  const items = groupMembers[0].split("");
  for (const item of items) {
    if (groupMembers[1].includes(item) && groupMembers[2].includes(item)) {
      points += alphabet.indexOf(item) + 1;
      break;
    }
  }

  groups.push(groupMembers);
}

console.log("Answer part 2: " + points);
