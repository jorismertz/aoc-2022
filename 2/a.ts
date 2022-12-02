// opponent moves
// a = rock - 1p
// b = paper - 2p
// c = scissors -3p

// my moves
// x = rock - 1p
// y = paper - 2p
// z = scissors - 3p

// score for rounds
// lost - 0p
// draw - 3p
// won - 6p

// What would your total score be if everything goes exactly
// according to your strategy guide?

const elements = {
  A: {
    winsTo: "scissors",
    losesTo: "paper",
    name: "rock",
  },
  B: {
    winsTo: "rock",
    losesTo: "scissors",
    name: "paper",
  },
  C: {
    winsTo: "paper",
    losesTo: "rock",
    name: "scissors",
  },
};

export function getRockPaperScissorOutcome(
  otherMove: string,
  yourMove: string
) {
  if (yourMove === "X") yourMove = "A";
  if (yourMove === "Y") yourMove = "B";
  if (yourMove === "Z") yourMove = "C";

  type indexType = keyof typeof elements;

  const otherMoveData = elements[otherMove as indexType];
  const yourMoveData = elements[yourMove as indexType];

  if (otherMoveData.winsTo === yourMoveData.name) return "lose";
  if (otherMoveData.losesTo === yourMoveData.name) return "win";
  else return "draw";
}

const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");

const roundScoreCount: number[] = [];
const choiceScoreCount: number[] = [];

for (const line of lines) {
  const [opponentsMove, yourMove] = line.split(" ");
  const outcome = getRockPaperScissorOutcome(opponentsMove, yourMove);

  // add score for round outcome
  if (outcome === "win") roundScoreCount.push(6);
  if (outcome === "draw") roundScoreCount.push(3);
  if (outcome === "lose") roundScoreCount.push(0);

  // add score for choice
  if (yourMove === "X") choiceScoreCount.push(1);
  if (yourMove === "Y") choiceScoreCount.push(2);
  if (yourMove === "Z") choiceScoreCount.push(3);
}

const totalScore =
  roundScoreCount.reduce((a, b) => a + b) +
  choiceScoreCount.reduce((a, b) => a + b);

console.log("Answer part 1: " + totalScore);
