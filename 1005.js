var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let A = Number(lines[0]);
let B = Number(lines[1]);

let media = (A * 3.5 + B * 7.5) / 11.0;

console.log("MEDIA = "+media.toFixed(5))