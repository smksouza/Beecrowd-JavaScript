var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let employees = Number(lines[0]);

let workload = Number(lines[1]);

let hourlyWage  = Number(lines[2]);

let salary = workload * hourlyWage;

console.log("NUMBER = " + employees)
console.log("SALARY = U$" + salary.toFixed(2))