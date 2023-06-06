var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let name = lines[0];

let salary = Number(lines[1]);
let sales = Number(lines[2]);
let commission = (15 * sales) / 100;

let finalSalary = commission + salary
console.log("TOTAL = " + finalSalary.toFixed(2))

