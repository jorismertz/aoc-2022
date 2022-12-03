const input = await Deno.readTextFile("input.prod");
export const backpacks = input.split("\n");

const alpha = Array.from(Array(26)).map((_e, i) => i + 65);
const alphabetLowercase = alpha.map((x) => String.fromCharCode(x + 32));
const alphabetUppercase = alpha.map((x) => String.fromCharCode(x));
export const alphabet = alphabetLowercase.concat(alphabetUppercase);

const foundItems: string[] = [];

for (const backpack of backpacks) {
  let foundDuplicate = false;
  const firstCompartment = backpack.slice(0, backpack.length / 2).split("");
  const secondCompartment = backpack
    .slice(backpack.length / 2, backpack.length)
    .split("");

  for (const item of firstCompartment) {
    if (foundDuplicate) break;
    if (secondCompartment.includes(item)) {
      foundDuplicate = true;
      foundItems.push(item);
    }
  }
}

const points = foundItems.map((item) => {
  const index = alphabet.indexOf(item);
  return index + 1;
});

console.log("Answer part 1: " + points.reduce((a, b) => a + b, 0));
