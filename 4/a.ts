const input = await Deno.readTextFile("./input.prod");
const lines = input.split("\n");

let containsOtherCount = 0;

function getAssignmentArray(pair: number[]) {
  return [...Array(Math.abs(pair[0] - pair[1]) + 1)].map(
    (_, index) => index + pair[0]
  );
}

function parsePair(pair: string) {
  return pair.split("-").map((num) => parseInt(num));
}

for (const line of lines) {
  const pairs = line.split(",");

  const ass1 = getAssignmentArray(parsePair(pairs[0]));
  const ass2 = getAssignmentArray(parsePair(pairs[1]));

  const largestPair = ass1.length > ass2.length ? ass1 : ass2;
  const smallestPair = ass1.length > ass2.length ? ass2 : ass1;

  const containsOther =
    smallestPair.map((num) => largestPair.includes(num)).indexOf(false) === -1
      ? true
      : false;

  if (containsOther) {
    containsOtherCount++;
  }
}

console.log("Answer part 1: " + containsOtherCount);
