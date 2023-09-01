const input = require("fs").readFileSync("./stdin", "utf8");
const lines = input.split("\n");

let money = Number(lines[0]);
const notes = [100, 50, 20, 10, 5, 2, 1];

const counterNotes = [0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < notes.length; i++) {
  while (money >= notes[i]) {
    money -= notes[i];
    counterNotes[i]++;
  }
}

for (let i = 0; i < notes.length; i++) {
  console.log(`${notes[i]} nota(s) de R$ ${counterNotes[i]}`);
}
