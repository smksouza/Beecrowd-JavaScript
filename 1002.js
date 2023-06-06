var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let N = 3.14159;

let raio = Number(lines[0]);

let area = N * Math.pow(raio, 2)

console.log("A="+area.toFixed(4));