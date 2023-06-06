var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);

let media = (A * 2 + B * 3 + C * 5) / 10;

console.log("MEDIA = "+media.toFixed(1))