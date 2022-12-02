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

// The Elf finishes helping with the tent and sneaks back over to you.
// "Anyway, the second column says how the round needs to end: X means you need to lose,
//  Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way,
// but now you need to figure out what shape to choose so the round ends as indicated.

import { getRockPaperScissorOutcome } from "./a.ts";

const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");

function getCorrectMove(opponentsMove: string, instruction: string) {
  if (instruction === "X") {
    if (opponentsMove === "A") return "Z";
    if (opponentsMove === "B") return "X";
    if (opponentsMove === "C") return "Y";
  }
  if (instruction === "Y") {
    if (opponentsMove === "A") return "X";
    if (opponentsMove === "B") return "Y";
    if (opponentsMove === "C") return "Z";
  }
  if (instruction === "Z") {
    if (opponentsMove === "A") return "Y";
    if (opponentsMove === "B") return "Z";
    if (opponentsMove === "C") return "X";
  }
  //
  return "X";
}

const totalPoints: number[] = [];

for (const line of lines) {
  const [opponentsMove, instruction] = line.split(" ");

  const correctMove = getCorrectMove(opponentsMove, instruction);

  const outcome = getRockPaperScissorOutcome(opponentsMove, correctMove);

  if (outcome === "win") totalPoints.push(6);
  if (outcome === "draw") totalPoints.push(3);
  if (outcome === "lose") totalPoints.push(0);

  if (correctMove === "X") totalPoints.push(1);
  if (correctMove === "Y") totalPoints.push(2);
  if (correctMove === "Z") totalPoints.push(3);
}

const total = totalPoints.reduce((a, b) => a + b, 0);

console.log("Answer part 2: " + total);
