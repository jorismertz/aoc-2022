const input = await Deno.readTextFile("./input.prod");
const pairs = input.split("\n").map((line) => line.split(","));

let result = 0;

for (const pair of pairs) {
  const a = pair[0].split("-").map((x) => parseInt(x));
  const b = pair[1].split("-").map((x) => parseInt(x));

  const isContained = a[0] <= b[1] && b[0] <= a[1];
  if (isContained) result++;
}

console.log("answer part 2: " + result);
