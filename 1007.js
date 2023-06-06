var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);
let D = Number(lines[3]);

let difference = (A * B - C * D);

console.log("DIFERENCA = " + difference);